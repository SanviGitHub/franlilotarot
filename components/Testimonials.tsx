import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ZoomIn } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    url: "https://instagram.feze16-1.fna.fbcdn.net/v/t51.82787-15/626333456_18049790033703945_4604122201282831369_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=107&ig_cache_key=MzgyNjY3NzQ3NzIzMzY2MDY0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MjA5Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=_rqCn6ROKpoQ7kNvwFqettW&_nc_oc=AdnJ913Wl92jMjkcK4WtTFOmZXsryXmxFin-1sahEi-aEc5Lh4pqNExVRUz_8OUKARE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.feze16-1.fna&_nc_gid=oMl18g_6y1_4ZcOBUA6RwQ&oh=00_AfsDBJFlYlRf_MdNNiR3e3GB24MRiBJcrPXSQxt2-TQ2-Q&oe=69983EBB",
    date: "14/08/25",
    rot: -2
  },
  {
    id: 2,
    url: "https://instagram.feze16-1.fna.fbcdn.net/v/t51.82787-15/628036718_18049446320703945_3635565266509259919_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=100&ig_cache_key=MzgyNDE5MTMxMDQyNTU4OTQ0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MjA5Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=j-Vm2Y8fwxkQ7kNvwH2cmiN&_nc_oc=AdljtH-4xJ8shhQp2BTbyPYlYqvwkVCqqxQpKuoglBJLU4E8j3WwzezkTEpOX4MnUyQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.feze16-1.fna&_nc_gid=oMl18g_6y1_4ZcOBUA6RwQ&oh=00_AfuTP596MjSi1xS_ITcrOVBtdkknDbuF7IKYtXwkbu_mwg&oe=69983A00",
    date: "02/09/25",
    rot: 1
  },
  {
    id: 3,
    url: "https://instagram.feze16-1.fna.fbcdn.net/v/t51.82787-15/624215358_18049100351703945_7668215146143318624_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=111&ig_cache_key=MzgyMTc3MjMyODgwODkyMjg3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MjA5Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=zfQAJ37q8eIQ7kNvwHJ8tuw&_nc_oc=AdkLEwMwJl6eso8JPXCRy5ZPq8NMUGTCr65mvj3_TR0UcGL6z3Et2_90HdN9vtkzS0U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.feze16-1.fna&_nc_gid=oMl18g_6y1_4ZcOBUA6RwQ&oh=00_Aftz5GI0IobSp2QlDQ_tN0J9zioll3BQ7EfdlhmUuyJ73w&oe=69986963",
    date: "22/10/25",
    rot: -1
  },
  {
    id: 4,
    url: "https://instagram.feze16-1.fna.fbcdn.net/v/t51.82787-15/619607589_18048210323703945_4076360215256957424_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=104&ig_cache_key=MzgxNjI3MDc0MTIyNzA2Mzc4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MjA5Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=oTzqpFydetUQ7kNvwFjG4yM&_nc_oc=AdktW8o8LunLp1NYOFWtFEJ82tzoJ_BjuhBmHLl0pwIkGUic8nbg2uV0pX81c9HkSGI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.feze16-1.fna&_nc_gid=oMl18g_6y1_4ZcOBUA6RwQ&oh=00_Aft6CT4NsKu5jO1GtTTq6NS4CiSammoWlsrE-azUFhubpQ&oe=69983C34",
    date: "11/11/25",
    rot: 2
  },
  {
    id: 5,
    url: "https://instagram.feze16-1.fna.fbcdn.net/v/t51.82787-15/619819143_18047922410703945_4190187302243883696_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=110&ig_cache_key=MzgxNDcwMTgyMzg0MDU2OTUyNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MjA5Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=jknZiFOAR7EQ7kNvwHzqB4a&_nc_oc=AdmEJ342iR5Jca-8q_9etk7iSikF-6FZWAPGX5YbjB8Coj4qxEzbzU5T1no0oaJswdE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.feze16-1.fna&_nc_gid=oMl18g_6y1_4ZcOBUA6RwQ&oh=00_Aft9Va3JnLRGJSugQqnxeKPfgw-yuf2IMdLXBIVGz-4FHA&oe=69986738",
    date: "05/12/25",
    rot: -3
  },
  {
    id: 6,
    url: "https://instagram.feze16-1.fna.fbcdn.net/v/t51.75761-15/495568393_18018465938703945_6461924687093757572_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=111&ig_cache_key=MzYyNjkyOTY5NTEyNDg0NDY1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MjA5Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=HzsQ2T88bKQQ7kNvwG0OkDJ&_nc_oc=Adldt-AoYiS7tru4JfgQsstEZuNsLcEbHraa3gBbMLfSb0aTDtjvFiRW6YLaDquI2qY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.feze16-1.fna&_nc_gid=oMl18g_6y1_4ZcOBUA6RwQ&oh=00_AfthlPEYY1YPp-W0uD_7chCaJe6OxQ8IHbuoGiX5xT_BQw&oe=6998418E",
    date: "01/01/26",
    rot: 2
  }
];

const Testimonials: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // --- SCROLL LOCKING ---
  useEffect(() => {
    if (isOpen || zoomedImage) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '4px'; 
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen, zoomedImage]);

  return (
    <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-mystic-black to-[#050505] min-h-[500px] flex items-center justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* --- THE TRIGGER --- */}
      <div className="text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
            Testimonios de Poder
          </h2>
          <p className="text-gray-400 font-sans max-w-lg mx-auto mb-10">
            Los resultados hablan en silencio. Accede a nuestro registro privado.
          </p>
        </motion.div>

        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-mystic-gold/50 text-mystic-gold rounded-sm uppercase tracking-widest text-sm font-bold overflow-hidden transition-all duration-300 hover:border-mystic-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            <BookOpen size={18} />
            Abrir el Grimorio de Resultados
          </span>
          <div className="absolute inset-0 bg-mystic-gold/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </motion.button>
      </div>

      {/* --- THE GRIMOIRE MODAL (PORTAL) --- */}
      {/* Using Portal to ensure the modal is top-level and covers everything (fixing the overlap issue) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center"
            >
              {/* Solid Backdrop to ensure no underlying content (like 'Niveles de Potencia') is visible */}
              <div 
                className="absolute inset-0 bg-black/100 md:bg-black/90 backdrop-blur-xl" 
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="
                  relative 
                  w-full h-full md:w-auto md:h-auto
                  md:max-w-6xl md:max-h-[85vh] md:aspect-[3/2]
                  bg-[#eaddcf] md:rounded-md shadow-2xl overflow-hidden 
                  flex flex-col md:flex-row 
                  md:border-l-[12px] border-l-0 md:border-l-[#3e2723]
                  z-[10000]
                "
                style={{
                  backgroundImage: "url('https://www.transparenttextures.com/patterns/aged-paper.png'), linear-gradient(to right, #e3d5b8, #f5f0e1)",
                  boxShadow: "inset 0 0 100px rgba(62, 39, 35, 0.3), 0 20px 50px rgba(0,0,0,0.5)"
                }}
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Close Button */}
                <div className="fixed md:absolute top-0 right-0 p-4 z-[110] w-full md:w-auto flex justify-end bg-gradient-to-b from-[#eaddcf] to-transparent md:bg-none pointer-events-none">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="pointer-events-auto bg-[#3e2723]/10 hover:bg-[#3e2723] text-[#3e2723] hover:text-[#eaddcf] rounded-full p-2 transition-all shadow-lg"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Spine Shadow - Desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none z-20 mix-blend-multiply -translate-x-1/2" />

                {/* Scroll Container */}
                <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto md:overflow-hidden book-scroll pt-16 md:pt-0">
                  
                  {/* Left Page (Mobile Top) */}
                  <div className="w-full md:w-1/2 p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#d7ccc8] md:overflow-y-auto book-scroll relative">
                    <div className="mb-10 text-center">
                      <div className="inline-block border-b-2 border-[#8d6e63] pb-2 px-8 mb-4">
                        <h3 className="font-hand text-4xl md:text-5xl text-[#3e2723] opacity-90">Evidencia</h3>
                      </div>
                      <p className="font-serif text-[#5d4037] text-xs md:text-sm italic px-4">
                        "Fragmentos reales de energía manifestada."
                      </p>
                    </div>

                    <div className="space-y-16 pb-8">
                      {TESTIMONIALS.slice(0, 3).map((item) => (
                        <div 
                          key={item.id} 
                          className="relative bg-white p-2 md:p-3 shadow-md md:shadow-lg transform transition-transform hover:scale-[1.02] cursor-zoom-in group max-w-[300px] md:max-w-sm mx-auto"
                          style={{ transform: `rotate(${item.rot}deg)` }}
                          onClick={() => setZoomedImage(item.url)}
                        >
                          <div className="tape-corner" />
                          <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                             <img src={item.url} alt="Testimonio" className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity filter sepia-[0.1]" />
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                <ZoomIn className="text-white drop-shadow-md" size={32} />
                             </div>
                          </div>
                          <div className="flex justify-end mt-2 px-1">
                             <span className="font-hand text-lg text-[#3e2723]">{item.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Page (Mobile Bottom) */}
                  <div className="w-full md:w-1/2 p-6 md:p-12 bg-[#f7f2e6] md:bg-transparent md:overflow-y-auto book-scroll">
                    <div className="space-y-16 pt-0 md:pt-20 pb-24 md:pb-12">
                       {TESTIMONIALS.slice(3, 6).map((item) => (
                        <div 
                          key={item.id} 
                          className="relative bg-white p-2 md:p-3 shadow-md md:shadow-lg transform transition-transform hover:scale-[1.02] cursor-zoom-in group max-w-[300px] md:max-w-sm mx-auto"
                          style={{ transform: `rotate(${item.rot}deg)` }}
                          onClick={() => setZoomedImage(item.url)}
                        >
                          <div className="tape-corner" style={{ left: 'auto', right: -8, transform: 'rotate(45deg)' }} />
                          <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                             <img src={item.url} alt="Testimonio" className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity filter sepia-[0.1]" />
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                <ZoomIn className="text-white drop-shadow-md" size={32} />
                             </div>
                          </div>
                          <div className="flex justify-end mt-2 px-1">
                             <span className="font-hand text-lg text-[#3e2723]">{item.date}</span>
                          </div>
                        </div>
                      ))}
                      
                      {/* Decorative End Mark */}
                      <div className="flex justify-center mt-12 opacity-40">
                         <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="#5d4037" strokeWidth="2">
                            <circle cx="50" cy="50" r="40" />
                            <circle cx="50" cy="50" r="10" fill="#5d4037" />
                         </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Lightbox for Zoom */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {zoomedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/100 backdrop-blur-xl p-4"
              onClick={() => setZoomedImage(null)}
            >
               <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[160] p-3 bg-black/40 rounded-full">
                 <X size={32} />
               </button>
               
               <motion.img 
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 exit={{ scale: 0.9, opacity: 0 }}
                 src={zoomedImage} 
                 className="max-h-[85vh] max-w-full rounded-sm shadow-2xl object-contain border border-white/10"
                 onClick={(e) => e.stopPropagation()}
               />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
};

export default Testimonials;