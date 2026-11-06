const nextConfig = {
  eslint: {
    // Solo advertir en desarrollo, ignorar en producción
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Verificar tipos pero no fallar el build
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
