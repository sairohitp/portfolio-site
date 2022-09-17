import React from "react";
import "./testimonials.css";

import Tagbox from "../tagger/Tagbox";

import imgone from "../../assets/clients/one.jpeg";
import imgtwo from "../../assets/clients/two.jpeg";
import imgthree from "../../assets/clients/three.jpeg";
import imgfour from "../../assets/clients/four.jpeg";
import imgfive from "../../assets/clients/five.jpeg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const reviews = [
  {
    id: 1,
    name: "Tim Cook",
    job: "CEO, Apple Inc.",
    img: imgone,
    text: "dood like fr this developer is the reason why apple is apple today. The undercover developer who did the whatever was done so you could totally use the stuff that you’re using – all possible by our contract with this company TS fr.",
  },
  {
    id: 2,
    name: "Sundar Pichai",
    job: "CEO, Google Inc",
    img: imgtwo,
    text: "man he used to live 14kms away from me. i was in ashok nagar back in India while he was in nanganallur. we could’ve met by train but now. we met at the board room. and one of the most important and life rejuvenating decision was made then and there, by signing up with TS corp. We may have the ammo, but they got the big guns. he’s my home forever xo.",
  },
  {
    id: 3,
    name: "Bill Gates",
    job: "former CEO, Microsoft",
    img: imgthree,
    text: "bruh im like lets get a deal with the real bois.  these are the deal breakers, the service providers, the thinkers and solvers. the designers and creators. to flourish in life as a business, one must have TS in their backpocket. else you setout to be doomed bruh :x",
  },
  {
    id: 4,
    name: "Parag Agarwal",
    job: "CEO, Twitter",
    img: imgfour,
    text: "despite my IIT degree, i wished i studied along with the godfather in his collage as one of his classmate. he is the real OG developer. although just starting out, his single simple statements solve crisises the world's is currently facing",
  },
  {
    id: 5,
    name: "Shantanu Narayen",
    job: "CEO, Adobe Systems",
    img: imgfive,
    text: "TS has proved to be the best time after time, problem statement one after the other. despite the really heavy applications we design here at adobe, TS Algorithms have O(1) complexity, which really changed how our assets are retrieved. totally impressed and worth it.",
  },
];

const Testimonials = () => {
  return (
    <div className="divbox" id="testimonials">
      <Tagbox subtop="Read what others have to say" heading="Testimonials" />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {reviews.map(({ id, name, job, img, text }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <img src={img} alt="avatar one" />
              <div className="client">
                <center>
                  <h4 className="clientName">{name}</h4>
                  <p>{job}</p>
                </center>
                <hr />
                <p className="clientReview">{text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
