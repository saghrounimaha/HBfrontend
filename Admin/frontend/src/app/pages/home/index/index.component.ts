import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { productData, latest_arrival } from './data';
import { interval, map } from 'rxjs';

interface Tutorial {
  title?: string;
  image?: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  // set the current year
  private _trialEndsAt: any;
  private _diff?: any;
  _days?: number;
  _hours?: number;
  _minutes?: number;
  _seconds?: number;
  latest_arrival: any;
  isRTL: any = false;

  slides = [
    {
      content_side: 'justify-content-end',
      bg_color: 'bg-danger-subtle',
      text_align: 'text-sm-end',
      img: 'assets/images/ecommerce/home/img-1.png',
      sub_title: 'In this season, find the best',
      title: 'Exclusive collection for everyone',
      content: 'Biggest offers on this season',
      btn_color: 'btn-danger'
    },
    {
      content_side: '',
      bg_color: 'bg-primary-subtle',
      text_align: '',
      img: 'assets/images/ecommerce/home/img-2.png',
      sub_title: 'Save up to 50% off',
      title: 'Pro Smart watches for smart People',
      content: '40% off up to on all selected products',
      btn_color: 'btn-primary'
    },
    {
      content_side: 'justify-content-end',
      bg_color: 'bg-danger-subtle',
      text_align: 'text-sm-end',
      img: 'assets/images/ecommerce/home/img-6.jpg',
      sub_title: 'Jewelry Design with Love',
      title: 'Discover world best Jewelry',
      content: 'Jewelry are like a tribute to being a woman',
      btn_color: 'btn-success'
    },
  ];



  // Customer
  customer = [
    {
      id: '1',
      img: 'assets/images/users/avatar-2.jpg',
      content: " Clean design. document is just a fews page but i should be like this cuz when looking on laravel project it well prepare. everytime i need a component or something else. easy to find. ",
      name: 'George Obrien',
      type: 'Velzon User',
    },
    {
      id: '2',
      img: 'assets/images/users/avatar-7.jpg',
      content: " Thank you for supporting CakePHP 4, we have purchased the template because of this support, please push forward more integration ",
      name: 'Chadwick A. Scott',
      type: 'Velzon User',
    },
    {
      id: '3',
      img: 'assets/images/users/avatar-8.jpg',
      content: " We have used your other templates as well and seems it's amazing with the design and code quality. Wish you best for the future updates. Keep updated you will be #1 in near future. ",
      name: 'Tommy Moreno',
      type: 'Skote User',
    },
    {
      id: '4',
      img: 'assets/images/users/avatar-10.jpg',
      content: " The template is very complete as an admin panel and was well written in a way that makes it easy to use. ",
      name: 'Mary Atkinson',
      type: 'Velzon User',
    }
  ];

  productData: any;
  tutorials: Tutorial[] = [];

  constructor(private primengConfig: PrimeNGConfig) {
  }


  ngOnInit(): void {
    this.productData = productData
    this.latest_arrival = latest_arrival
    this.tutorials = [
      {
        title: 'Web MH ',
        image:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155051/WebMH.png',
      },
      {
        title: 'Interview Experience ',
        image:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420112859/IntExp.png',
      },
      {
        title: 'GeeksforGeeks Logo ',
        image:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png',
      },
      {
        title: 'GeeksforGeeks Carnival ',
        image:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210418122505/132_00_00_Mailheader-min.png',
      },
      {
        title: 'Python Course ',
        image:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211028203138/GeeksforGeeks-Python-Foundation-Course-Learn-Python-from-Scratch-in-Hindi.png',
      },
    ];

    // Date Set
    this._trialEndsAt = "2025-01-30";

    const direction = document.documentElement.getAttribute('dir')
    if (direction == 'ltr') {
      this.isRTL = false
    } else {
      this.isRTL = true
    }
    /**
     * Count date set
     */
    interval(1000).pipe(map((x) => {
      this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
    })).subscribe((x) => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
    });

    setTimeout(() => {
      this.Navigation = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        rtl: this.isRTL
      };

      this.NavAndPagination = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="ph-caret-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ph-caret-right"></i></button>',
        rtl: this.isRTL
      };

      this.Customers = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: this.isRTL,
        arrows: false,
        responsive: [
          {
            breakpoint: 499,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      };
    })
  }
  // Swiper option
  Navigation = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    rtl: this.isRTL
  };

  // NavAndPaginatoion option
  NavAndPagination = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="ph-caret-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ph-caret-right"></i></button>',
    rtl: this.isRTL
  };

  Customers = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: this.isRTL,
    arrows: false,
    responsive: [
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }

  dataFilter(filter: any, ev: any) {
    const category = document.querySelectorAll('.categories')
    category.forEach(element => {
      element.classList.remove('active')
    });
    ev.target.classList.add('active')
    if (filter == 'all') {
      this.productData = productData
    } else {
      this.productData = productData.filter((item: any) => {
        return filter == item.type
      })
    }
  }


  /**
  * Day Set
  */
  getDays(t: number) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  /**
   * Hours Set
   */
  getHours(t: number) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  /**
   * Minutes set
   */
  getMinutes(t: number) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  /**
   * Secound set
   */
  getSeconds(t: number) {
    return Math.floor((t / 1000) % 60);
  }

}
