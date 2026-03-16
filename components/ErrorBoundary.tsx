import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let displayMessage = "Algo salió mal. Por favor, intenta recargar la página.";
      
      try {
        // Check if it's a Firestore error
        if (this.state.error?.message.startsWith('{')) {
          const errData = JSON.parse(this.state.error.message);
          if (errData.error.includes('permission-denied')) {
            displayMessage = "No tienes permisos suficientes para realizar esta acción.";
          }
        }
      } catch (e) {
        // Not a JSON error
      }

      return (
        <div className="min-h-screen bg-mystic-black flex items-center justify-center p-6 text-center">
          <div className="glass-panel p-8 rounded-sm border border-red-900/30 max-w-md">
            <h2 className="text-2xl font-serif text-white mb-4">Error Inesperado</h2>
            <p className="text-gray-400 mb-6">{displayMessage}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-mystic-gold text-black px-6 py-2 rounded-sm font-bold hover:bg-white transition-colors"
            >
              RECARGAR PÁGINA
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
