export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  specs: {
    sensor: string;
    resolution: string;
    iso: string;
    video: string;
    weight: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Campli X-Pro 3",
    category: "Mirrorless",
    price: 24999,
    description: "Cámara mirrorless profesional con sensor full-frame de 45MP. Perfecta para fotógrafos exigentes que buscan calidad y portabilidad.",
    features: [
      "Sensor full-frame de 45MP",
      "Estabilización de imagen de 8 stops",
      "Enfoque automático con detección de ojos",
      "Video 8K a 30fps",
      "Pantalla táctil articulada de 3.2 pulgadas",
      "Doble ranura para tarjetas SD"
    ],
    image: "https://images.unsplash.com/photo-1712594759797-c7838c645e34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYW1lcmElMjBtaXJyb3JsZXNzfGVufDF8fHx8MTc3MjYzNzUzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=unsplash&utm_medium=referral",
    specs: {
      sensor: "Full-frame CMOS",
      resolution: "45.7 MP",
      iso: "100-51200",
      video: "8K 30fps / 4K 120fps",
      weight: "658g"
    }
  },
  {
    id: "2",
    name: "Campli Vintage Pro",
    category: "Film",
    price: 8999,
    description: "Experimenta la nostalgia de la fotografía analógica con tecnología moderna. Perfecta para creativos que valoran la estética clásica.",
    features: [
      "Sistema de película de 35mm",
      "Lente fijo de 50mm f/1.8",
      "Exposímetro integrado",
      "Construcción en metal premium",
      "Compatible con películas ISO 100-3200",
      "Diseño retro elegante"
    ],
    image: "https://images.unsplash.com/photo-1697238724718-29cc8b1a2340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FtZXJhJTIwZmlsbXxlbnwxfHx8fDE3NzI2MDM4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=unsplash&utm_medium=referral",
    specs: {
      sensor: "Película 35mm",
      resolution: "N/A",
      iso: "100-3200",
      video: "N/A",
      weight: "520g"
    }
  },
  {
    id: "3",
    name: "Campli Studio Max",
    category: "DSLR",
    price: 32999,
    description: "DSLR profesional diseñada para estudios y fotografía comercial. Máxima calidad y control total sobre cada toma.",
    features: [
      "Sensor medio formato de 102MP",
      "Sistema de enfoque de 1053 puntos",
      "Disparo continuo de 16fps",
      "Video 4K ProRes RAW",
      "Pantalla táctil de 3.2 pulgadas",
      "Resistente al clima y al polvo"
    ],
    image: "https://images.unsplash.com/photo-1588420635201-3a9e2a2a0a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NzI2Mzc1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=unsplash&utm_medium=referral",
    specs: {
      sensor: "Medio formato CMOS",
      resolution: "102 MP",
      iso: "64-25600",
      video: "4K ProRes RAW",
      weight: "1050g"
    }
  },
  {
    id: "4",
    name: "Campli Compact Pro",
    category: "Compact",
    price: 12999,
    description: "Cámara compacta premium con prestaciones profesionales. La compañera perfecta para creadores en movimiento.",
    features: [
      "Sensor APS-C de 24MP",
      "Lente zoom 24-70mm f/2.8",
      "Estabilización óptica de imagen",
      "Video 4K 60fps",
      "Pantalla táctil abatible",
      "Wi-Fi y Bluetooth integrados"
    ],
    image: "https://images.unsplash.com/photo-1758506127287-6c114e3cc8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2FtZXJhJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MjYzNzUzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=unsplash&utm_medium=referral",
    specs: {
      sensor: "APS-C CMOS",
      resolution: "24.2 MP",
      iso: "100-25600",
      video: "4K 60fps",
      weight: "305g"
    }
  },
  {
    id: "5",
    name: "Campli Creator Z",
    category: "Mirrorless",
    price: 18999,
    description: "Diseñada específicamente para creadores de contenido. Combina excelente calidad de video con funciones inteligentes.",
    features: [
      "Sensor full-frame de 33MP",
      "Enfoque automático Eye-AF para video",
      "Entrada de micrófono y auriculares",
      "Transmisión en vivo integrada",
      "Batería de larga duración",
      "Menú optimizado para video"
    ],
    image: "https://images.unsplash.com/photo-1745848037998-1e6dc8380f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYW1lcmElMjBsZW5zfGVufDF8fHx8MTc3MjYzNzUzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=unsplash&utm_medium=referral",
    specs: {
      sensor: "Full-frame CMOS",
      resolution: "33 MP",
      iso: "100-51200",
      video: "4K 120fps / FHD 240fps",
      weight: "590g"
    }
  },
  {
    id: "6",
    name: "Campli Workspace Kit",
    category: "Kit",
    price: 45999,
    description: "Kit completo profesional que incluye cámara, lentes y accesorios esenciales. Todo lo que necesitas para iniciar tu carrera fotográfica.",
    features: [
      "Cámara mirrorless full-frame",
      "Lente 24-70mm f/2.8",
      "Lente 50mm f/1.4",
      "Flash externo profesional",
      "2 baterías adicionales",
      "Bolsa de transporte premium"
    ],
    image: "https://images.unsplash.com/photo-1629227697594-fe8453e4b480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjB3b3Jrc3BhY2UlMjBjYW1lcmF8ZW58MXx8fHwxNzcyNjM3NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=unsplash&utm_medium=referral",
    specs: {
      sensor: "Full-frame CMOS",
      resolution: "45.7 MP",
      iso: "100-51200",
      video: "8K 30fps / 4K 120fps",
      weight: "658g (cuerpo)"
    }
  }
];
