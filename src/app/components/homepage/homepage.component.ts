import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NavLink {
  label: string;
  hasDropdown?: boolean;
}

interface CategoryTile {
  label: string;
  image: string;
  button: string;
}

interface ColorSwatch {
  value: string;
  needsBorder?: boolean;
}

interface ProductCard {
  title: string;
  priceLabel: string;
  image: string;
  colors: ColorSwatch[];
  saleBadge?: string;
  countdown?: string[];
}

interface BannerCard {
  title: string;
  subtitle: string;
  image: string;
}

interface StoreTab {
  city: string;
  title: string;
  address: string[];
  hours: string[];
  email: string;
  phone: string;
  image: string;
}

interface FooterColumn {
  title: string;
  links: string[];
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  readonly socials = ['Fb', 'Ig', 'Tw', 'Pt', 'Yt'];

  readonly navLinks: NavLink[] = [
    { label: 'Home', hasDropdown: true },
    { label: 'Shop', hasDropdown: true },
    { label: 'Products', hasDropdown: true },
    { label: 'Pages', hasDropdown: true },
    { label: 'Blog', hasDropdown: true },
    { label: 'Buy now' }
  ];

  readonly headerActions = [
    { icon: 'search', label: 'Search products' },
    { icon: 'user', label: 'Account' },
    { icon: 'heart', label: 'Wishlist', badge: '0' },
    { icon: 'bag', label: 'Cart', badge: '0' }
  ];

  readonly hero = {
    heading: ['Youthful', 'Summer style'],
    subheading: 'Discover the hottest trends and must-have looks',
    cta: 'Shop collection',
    image: 'https://www.figma.com/api/mcp/asset/ec6c5067-358e-44dd-afcf-efa73ebbd71a'
  };

  readonly categoryTiles: CategoryTile[] = [
    {
      label: 'Women',
      button: 'Women',
      image: 'https://www.figma.com/api/mcp/asset/7577bd11-f4d7-44fe-881f-fde5cb06bdfe'
    },
    {
      label: 'Handbag',
      button: 'Handbag',
      image: 'https://www.figma.com/api/mcp/asset/d40bcb94-903b-4bce-b78b-ba2d0ff7b3d9'
    },
    {
      label: 'Accessories',
      button: 'Accessories',
      image: 'https://www.figma.com/api/mcp/asset/d1d9008b-601a-4d7a-89fa-aed7dfc091e7'
    },
    {
      label: 'Men',
      button: 'Men',
      image: 'https://www.figma.com/api/mcp/asset/3d140306-ac99-4bbf-84f4-23547bc886b3'
    }
  ];

  readonly denimHighlight = {
    eyebrow: 'SPRING SALE 30% OFF',
    title: ['Effortless', 'Denim Delights'],
    copy: 'Discover the versatility of denim with our collection of jeans, jackets',
    image: 'https://www.figma.com/api/mcp/asset/8942da5e-2aeb-4894-a339-4d9e71e76162',
    cta: 'Shop collection'
  };

  readonly bestSellers: ProductCard[] = [
    {
      title: 'Ribbed Tank Top',
      priceLabel: '$16.95',
      image: 'https://www.figma.com/api/mcp/asset/95f65132-d9a6-48bc-ac1a-cb7f3b19e3af',
      colors: [
        { value: '#f59f45' },
        { value: '#111111', needsBorder: true },
        { value: '#ffffff', needsBorder: true }
      ],
      saleBadge: '-33%',
      countdown: ['11d', '15h', '51m', '36s']
    },
    {
      title: 'Ribbed modal T-shirt',
      priceLabel: 'From $18.95',
      image: 'https://www.figma.com/api/mcp/asset/ea08da15-1b87-4ba1-b85d-f6574b3acaad',
      colors: [
        { value: '#957948' },
        { value: '#d966d9' },
        { value: '#f3f3f3', needsBorder: true }
      ]
    },
    {
      title: 'Oversized Printed T-shirt',
      priceLabel: '$10.00',
      image: 'https://www.figma.com/api/mcp/asset/58a1885f-ad5d-4609-a2bf-635bf8cf48d5',
      colors: [
        { value: '#1f2937', needsBorder: true },
        { value: '#c4b08d' },
        { value: '#9bc5ff' }
      ]
    },
    {
      title: 'Oversized Printed T-shirt',
      priceLabel: '$16.95',
      image: 'https://www.figma.com/api/mcp/asset/6297d8f0-f98f-4531-947f-629d80862f27',
      colors: [
        { value: '#caffd6' },
        { value: '#0f0f0f', needsBorder: true },
        { value: '#a8bcd4' }
      ]
    }
  ];

  readonly spotlightBanners: BannerCard[] = [
    {
      title: 'Accessories Galore',
      subtitle: 'Shop through our latest selection of Fashion',
      image: 'https://www.figma.com/api/mcp/asset/037a8c71-6084-4611-b963-d180b75e6a97'
    },
    {
      title: 'Statement Pieces',
      subtitle: 'Shop through our latest selection of Womens',
      image: 'https://www.figma.com/api/mcp/asset/d23a869f-fa32-49aa-885c-28872161e031'
    }
  ];

  readonly storeTabs: StoreTab[] = [
    {
      city: 'Hongkong',
      title: 'Hongkong Store',
      address: ['301 Front St W Toronto,', 'Ecomus@support.com', '(08) 8942 1299'],
      hours: ['Mon - Fri, 8:30am - 10:30pm', 'Saturday, 8:30am - 10:30pm', 'Sunday Closed'],
      email: 'info@fashionshop.com',
      phone: '(212) 555-1234',
      image: 'https://www.figma.com/api/mcp/asset/197c57d2-a195-4fd4-9cd2-d7bd75f7b2a5'
    },
    {
      city: 'London',
      title: 'London Flagship',
      address: ['58 Wardour St, Soho', 'team@ecomus.com', '+44 20 5551 3377'],
      hours: ['Mon - Sat, 9:00am - 9:00pm', 'Sunday, 10:00am - 6:00pm'],
      email: 'team@ecomus.com',
      phone: '+44 20 5551 3377',
      image: 'https://www.figma.com/api/mcp/asset/197c57d2-a195-4fd4-9cd2-d7bd75f7b2a5'
    },
    {
      city: 'Paris',
      title: 'Paris Atelier',
      address: ['17 Rue Dupetit-Thouars', 'bonjour@ecomus.com', '+33 1 42 72 33 44'],
      hours: ['Tue - Sun, 10:00am - 8:00pm'],
      email: 'bonjour@ecomus.com',
      phone: '+33 1 42 72 33 44',
      image: 'https://www.figma.com/api/mcp/asset/197c57d2-a195-4fd4-9cd2-d7bd75f7b2a5'
    }
  ];

  readonly brandLogos: string[] = [
    'https://www.figma.com/api/mcp/asset/983aa8b1-f7ad-443f-85a4-8cd858afd23b',
    'https://www.figma.com/api/mcp/asset/34634077-89c2-4b3d-ab65-77bb0c6a1c6e',
    'https://www.figma.com/api/mcp/asset/f3a7fb9c-99d6-4222-8476-0a0c29125cd1',
    'https://www.figma.com/api/mcp/asset/37218acd-4c79-4b2a-8626-50971612a66a',
    'https://www.figma.com/api/mcp/asset/c1058cb9-44c5-4689-b075-1c711418005a',
    'https://www.figma.com/api/mcp/asset/b5778479-f13b-4dbb-9387-7f7531ffccd0'
  ];

  readonly footerColumns: FooterColumn[] = [
    {
      title: 'Help',
      links: [
        'Privacy Policy',
        'Returns + Exchanges',
        'Shipping',
        'Terms & Conditions',
        'FAQ’s',
        'Compare',
        'My Wishlist'
      ]
    },
    {
      title: 'About us',
      links: ['Our Story', 'Visit Our Store', 'Contact Us', 'Account']
    }
  ];

  readonly paymentIcons = [
    'https://www.figma.com/api/mcp/asset/189811dc-bc32-4fa1-8fb7-51562a2fc9e3',
    'https://www.figma.com/api/mcp/asset/e0ef0e50-0e48-4126-85bc-e313f657a9c5',
    'https://www.figma.com/api/mcp/asset/71008200-ac61-455c-a4e8-81186e6906ad',
    'https://www.figma.com/api/mcp/asset/ed180795-2024-477b-8f84-01fb313ab97e',
    'https://www.figma.com/api/mcp/asset/1bfb6c92-c0e5-412e-b18c-ecf774619cc2'
  ];

  readonly brandLogo = 'https://www.figma.com/api/mcp/asset/e8b6c071-36a7-4995-9169-cfdd6f097064';

  activeStoreIndex = 0;

  setActiveStore(index: number): void {
    this.activeStoreIndex = index;
  }

  get activeStore(): StoreTab {
    return this.storeTabs[this.activeStoreIndex];
  }

  getIconPath(icon: string): string {
    const paths: Record<string, string> = {
      search: 'M21 21l-4.35-4.35M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
      user: 'M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z',
      heart:
        'M12 20s-7.5-4.35-7.5-10A4.5 4.5 0 0 1 12 6.09 4.5 4.5 0 0 1 19.5 10c0 5.65-7.5 10-7.5 10z',
      bag: 'M6 7h12l1 11H5zm3 0a3 3 0 1 1 6 0'
    };
    return paths[icon] ?? '';
  }

  onSubscribe(event: Event): void {
    event.preventDefault();
  }
}


