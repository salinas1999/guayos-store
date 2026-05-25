'use client';
import { ShoppingCart, Menu, Star, Truck, ShieldCheck, Phone } from 'lucide-react';

export default function GuayosStoreLanding() {
  const products = [
    {
      name: 'Nike Mercurial Vapor',
      price: '$320.000',
      oldPrice: '$380.000',
      image:
        'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Adidas Predator Elite',
      price: '$350.000',
      oldPrice: '$410.000',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Puma Future Ultimate',
      price: '$299.000',
      oldPrice: '$350.000',
      image:
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Nike Tiempo Legend',
      price: '$289.000',
      oldPrice: '$330.000',
      image:
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <header className="sticky top-0 z-50 backdrop-blur bg-black/90 flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <Menu className="md:hidden" />

          <h1 className="text-3xl font-extrabold tracking-wide">
            GUAYOS <span className="text-lime-400">PRO</span>
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#" className="hover:text-lime-400 transition">
            Inicio
          </a>
          <a href="#productos" className="hover:text-lime-400 transition">
            Productos
          </a>
          <a href="#" className="hover:text-lime-400 transition">
            Ofertas
          </a>
          <a href="#" className="hover:text-lime-400 transition">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex border border-zinc-700 p-3 rounded-xl hover:border-lime-400 transition">
            <ShoppingCart size={20} />
          </button>

          <button className="bg-lime-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Comprar
          </button>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-20 py-16">
        <div>
          <p className="uppercase text-lime-400 tracking-[4px] text-sm mb-4">
            Nueva colección 2026
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Domina la cancha
          </h2>

          <p className="text-zinc-300 text-lg mb-8 max-w-xl">
            Encuentra los mejores guayos para fútbol profesional, microfútbol y césped artificial.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-lime-400 text-black px-7 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Ver catálogo
            </button>

            <button className="border border-zinc-600 px-7 py-3 rounded-2xl hover:border-lime-400 transition">
              WhatsApp
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop"
            alt="Guayos"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>
      </section>

      <section className="px-8 md:px-20 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex gap-4 items-start">
            <Truck className="text-lime-400" />
            <div>
              <h3 className="font-bold text-xl mb-1">Envíos nacionales</h3>
              <p className="text-zinc-400">Realizamos entregas a toda Colombia.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex gap-4 items-start">
            <ShieldCheck className="text-lime-400" />
            <div>
              <h3 className="font-bold text-xl mb-1">Compra segura</h3>
              <p className="text-zinc-400">Pagos protegidos y productos originales.</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex gap-4 items-start">
            <Phone className="text-lime-400" />
            <div>
              <h3 className="font-bold text-xl mb-1">Atención WhatsApp</h3>
              <p className="text-zinc-400">Asesoría rápida para escoger tu talla.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {['Fútbol Profesional', 'Microfútbol', 'Césped Artificial'].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400 transition"
            >
              <h3 className="text-2xl font-bold mb-3">{item}</h3>
              <p className="text-zinc-400">
                Modelos exclusivos y cómodos para cada tipo de juego.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="productos" className="px-8 md:px-20 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-black">Productos destacados</h2>
          <button className="text-lime-400 font-semibold">Ver todos</button>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-lime-400 transition hover:-translate-y-2 duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-1 mb-3 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>

                <div className="flex items-center gap-3 mb-5">
                  <p className="text-lime-400 text-xl font-semibold">
                    {product.price}
                  </p>

                  <p className="text-zinc-500 line-through text-sm">
                    {product.oldPrice}
                  </p>
                </div>

                <button className="w-full bg-lime-400 text-black py-3 rounded-2xl font-bold hover:scale-105 transition">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-8 md:mx-20 bg-lime-400 rounded-[40px] p-10 md:p-16 text-black my-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-black mb-5">Hasta 30% OFF</h2>
            <p className="text-lg mb-6">
              Aprovecha nuestras promociones en marcas seleccionadas.
            </p>

            <button className="bg-black text-white px-7 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Comprar ahora
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1200&auto=format&fit=crop"
            alt="Oferta"
            className="rounded-3xl h-[300px] w-full object-cover"
          />
        </div>
      </section>

      <section className="px-8 md:px-20 py-16">
        <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Recibe ofertas exclusivas
          </h2>

          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Suscríbete para enterarte primero de nuevos lanzamientos y promociones.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="flex-1 bg-black border border-zinc-700 rounded-2xl px-6 py-4 outline-none focus:border-lime-400"
            />

            <button className="bg-lime-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Suscribirme
            </button>
          </div>
        </div>
      </section>

      <a
        href="#"
        className="fixed bottom-6 right-6 bg-lime-400 text-black p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        <Phone />
      </a>

      <footer className="border-t border-zinc-800 mt-20 px-8 md:px-20 py-10 text-zinc-400">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white text-2xl font-black mb-4">
              GUAYOS PRO
            </h3>
            <p>
              Tienda online especializada en guayos y accesorios deportivos.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <p>WhatsApp: +57 300 000 0000</p>
            <p>Email: ventas@guayospro.com</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <button className="border border-zinc-700 px-4 py-2 rounded-xl hover:border-lime-400 transition">
                Instagram
              </button>
              <button className="border border-zinc-700 px-4 py-2 rounded-xl hover:border-lime-400 transition">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

