export default function linkResolver(doc) {
    // Define your resolver logic here
    switch (doc.type) {
      case 'galeria':
        return '/gallery/' + doc.uid;
      case 'jatekos':
        return '/player/' + doc.uid;
      case 'poszt':
        return '/post/' + doc.uid;
      case 'video':
        return '/video/' + doc.uid;
      default:
        return '/';
    }
  }