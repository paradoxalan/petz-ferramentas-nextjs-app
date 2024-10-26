/** @type {import('next').NextConfig} */
const nextConfig = {
rewrites: async () => [
    {
      source: "/menu.html",
      destination: "/menu/index.html",
    },
    {
      source: "/anotacoes-zeedog.html",
      destination: "/anotacoes-zeedog.html",
    },
    {
      source: "/anotacoes-brf-petfood.html",
      destination: "/anotacoes-brf-petfood.html",
    },
    {
      source: "/anotacoes-farmacia.html",
      destination: "/anotacoes-farmacia.html",
    },
    {
      source: "/anotacoes-alimentos-peixes.html",
      destination: "/anotacoes-alimentos-peixes.html",
    },
    {
      source: "/pagamento-pos-relatorio.html",
      destination: "/pagamento-pos-relatorio.html",
    },
    {
      source: "/barcode-gen.html",
      destination: "/barcode-gen.html",
    },
    {
      source: "/promocoes.html",
      destination: "/promocoes.html",
    }
  ]
};

export default nextConfig;
