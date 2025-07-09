// Utility functions to load data from JSON files
export async function loadSiteData() {
  try {
    const response = await fetch('/src/data/site.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading site data:', error);
    return {
      title: "Karolina Fotografía",
      description: "Fotografía profesional",
      email: "hola@karolinafotografia.com",
      phone: "+34 600 123 456",
      location: "Madrid, España",
      logo: "/image.png"
    };
  }
}

export async function loadHeroData() {
  try {
    const response = await fetch('/src/data/hero.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading hero data:', error);
    return {
      title: "Capturando momentos",
      accent: "únicos",
      description: "Fotografía profesional que cuenta historias a través de cada imagen.",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
    };
  }
}

export async function loadAboutData() {
  try {
    const response = await fetch('/src/data/about.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading about data:', error);
    return {
      title: "Sobre Mí",
      subtitle: "Transformando momentos en recuerdos eternos",
      description1: "Soy una fotógrafa apasionada por capturar momentos únicos.",
      description2: "Mi enfoque se centra en la conexión humana y la belleza natural.",
      experience: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
    };
  }
}

export async function loadServicesData() {
  try {
    const response = await fetch('/src/data/services.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading services data:', error);
    return { services: [] };
  }
}

export async function loadGalleryData() {
  try {
    const response = await fetch('/src/data/gallery.json');
    return await response.json();
  } catch (error) {
    console.error('Error loading gallery data:', error);
    return { images: [] };
  }
}