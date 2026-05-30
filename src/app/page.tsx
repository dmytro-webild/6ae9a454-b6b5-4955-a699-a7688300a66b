"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";

import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import { AlertCircle, CheckCircle2, Instagram, Leaf, Smile, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div className="w-full bg-accent text-primary-cta-text py-2 text-center text-sm font-semibold">
          Online booking is coming soon! For now, please call or text us to schedule your service.
        </div>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Why Choose Us",          id: "#why-choose-us"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "Reviews",          id: "#reviews"},
        {
          name: "Book Now",          id: "#booking"},
      ]}
      button={{
        text: "Book Now",        href: "#booking"}}
      brandName="Oscar's Trash Bin Cleaning"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "plain"}}
      title="Keep Your Trash Bins Fresh & Clean"
      description="Located in Whittier, we say goodbye to lingering odors, harmful bacteria, and unwanted pests. Our professional deep cleaning services ensure your bins are sparkling clean and sanitized."
      kpis={[
        {
          value: "99%",          label: "Satisfaction Rate"
        },
        {
          value: "Eco-Friendly",          label: "Cleaning"
        },
        {
          value: "Quick & Easy",          label: "Booking"
        },
      ]}
      enableKpiAnimation={true}
      tag="Same Week Appointments Available"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "Call or Text Now: 562-588-8422",          href: "tel:562-588-8422"},
        {
          text: "Book an Appointment",          href: "#booking"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780029439119-zwrf2cxx.jpg?_wi=1"
      imageAlt="Power washing a trash bin"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-young-woman-taking-selfie-photo-winking_1262-18343.jpg",          alt: "Smiling young woman"},
        {
          src: "http://img.b2bpic.net/free-photo/people-technology-close-up-shot-happy-face-attractive-bearded-man-sitting-front-laptop-screen-smiling-joyfully-while-messaging-friends-online-via-social-networks_273609-6655.jpg",          alt: "Happy bearded man"},
        {
          src: "http://img.b2bpic.net/free-photo/smiley-woman-outdoors_23-2148613033.jpg",          alt: "Smiley woman outdoors"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-person-football-game_23-2149015522.jpg",          alt: "Person at a football game"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-with-headphones_23-2149009409.jpg",          alt: "Man with headphones"},
      ]}
      avatarText="Join 100+ happy customers!"
      marqueeItems={[
        {
          type: "text-icon",          text: "Eco-Friendly Cleaning",          icon: Leaf,
        },
        {
          type: "text",          text: "Satisfaction Guaranteed"},
        {
          type: "text-icon",          text: "Pest Control Included",          icon: AlertCircle,
        },
        {
          type: "text",          text: "Flexible Scheduling"},
        {
          type: "text-icon",          text: "Trusted Local Service",          icon: Sparkles,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Us"
      title="Affordable, Reliable, and Eco-Friendly Bin Cleaning"
      description="Oscar's Trash Bin Cleaning is dedicated to providing top-notch residential cleaning services. We make it easy and affordable to keep your home's trash bins immaculate."
      subdescription="Using only eco-friendly and non-harmful cleaning products, we ensure a safe environment for your family and pets while delivering a deep clean that lasts."
      icon={Leaf}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780114138138-de72e2ot.jpg"
      imageAlt="Cleaning products and services information"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardOne
      textboxLayout="default"
      useInvertedBackground={false}
      products={[
        {
          id: "before",          name: "Before Cleaning",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780112868035-futvptj8.jpg",          imageAlt: "Dirty trash bin before cleaning"},
        {
          id: "after",          name: "After Cleaning",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780112868035-iamaoe19.jpg",          imageAlt: "Clean trash bin after cleaning"},
      ]}
      title="See the Transformation!"
      description="Our professional cleaning process revitalizes even the dirtiest bins. Take a look at the incredible difference we make."
      tag="Before & After"
      animationType="slide-up"
      gridVariant="uniform-all-items-equal"
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",          value: "$10/bin",          title: "Affordable Pricing",          items: [
            "Competitive rates",            "No hidden fees"],
        },
        {
          id: "2",          value: "Odor-Free",          title: "Removes Bad Smells",          items: [
            "Eliminates foul odors",            "Long-lasting freshness"],
        },
        {
          id: "3",          value: "Sanitized",          title: "Reduces Pests & Bacteria",          items: [
            "Minimizes germs",            "Deters insects and rodents"],
        },
        {
          id: "4",          value: "Reliable",          title: "Fast & Dependable Service",          items: [
            "Prompt appointments",            "Consistent quality"],
        },
      ]}
      title="Your Bins, Our Priority: Clean, Safe, & Convenient"
      description="Discover the Oscar's Trash Bin Cleaning difference. We're committed to providing an exceptional service experience."
      tag="Why Choose Us"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "single-bin",          badge: "Standard",          price: "$10",          subtitle: "Per Bin Cleaning",          buttons: [
            {
              text: "Book Now",              href: "#booking"},
          ],
          features: [
            "Deep scrubbing",            "Power washing",            "Fresh scent treatment"],
        },
        {
          id: "three-bins",          badge: "Best Value",          price: "$25",          subtitle: "For All 3 Bins",          buttons: [
            {
              text: "Book Now",              href: "#booking"},
          ],
          features: [
            "Deep scrubbing",            "Power washing",            "Fresh scent treatment",            "Insect control"],
        },
      ]}
      title="Simple & Transparent Pricing"
      description="Choose the cleaning package that best suits your needs. No hidden fees, just sparkling clean bins."
      tag="Our Pricing"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          date: "May 2024",          title: "Bins never smelled this good!",          quote: "Oscar's team did an amazing job! My bins have never smelled this fresh and clean. The service was fast and professional.",          tag: "Smell Gone",          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-relaxing-home_23-2150307065.jpg",          avatarAlt: "Sarah J. Avatar",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780029439119-zwrf2cxx.jpg?_wi=2",          imageAlt: "female customer avatar smiling"},
        {
          id: "2",          name: "Michael T.",          date: "April 2024",          title: "Highly Recommend for Cleanliness",          quote: "I was skeptical at first, but Oscar's Trash Bin Cleaning delivered! Our bins are spotless and I no longer worry about pests. Great job!",          tag: "Pest-Free",          avatarSrc: "http://img.b2bpic.net/free-photo/young-man-sad-expression_1194-2829.jpg",          avatarAlt: "Michael T. Avatar",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780029439119-9tmze8cg.jpg",          imageAlt: "female customer avatar smiling"},
        {
          id: "3",          name: "Emily R.",          date: "April 2024",          title: "Eco-friendly and Effective",          quote: "Love that they use non-harmful chemicals. It's important to me, and the bins are still sparkling clean. Fantastic service!",          tag: "Green Clean",          avatarSrc: "http://img.b2bpic.net/free-photo/old-woman-confronting-alzheimer-disease_23-2149043724.jpg",          avatarAlt: "Emily R. Avatar"},
        {
          id: "4",          name: "David K.",          date: "March 2024",          title: "Fast and Reliable!",          quote: "Oscar's provides a super fast and reliable service. My bins are cleaned on schedule every time without any hassle. A true lifesaver!",          tag: "Efficient",          avatarSrc: "http://img.b2bpic.net/free-photo/middle-age-businessman-smiling-happy-standing-city_839833-25759.jpg",          avatarAlt: "David K. Avatar"},
        {
          id: "5",          name: "Jessica L.",          date: "March 2024",          title: "Great Value for Money",          quote: "The pricing is very fair for the quality of service you receive. My bins feel brand new after every cleaning. Definitely worth it!",          tag: "Affordable",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-woman-playing-poker-casino_23-2151831023.jpg",          avatarAlt: "Jessica L. Avatar"},
      ]}
      title="Trusted by Homeowners"
      description="Hear from our happy customers about their fresh and clean trash bins!"
      tag="What Our Customers Say"
    />
  </div>

  <div id="booking" data-section="booking">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Choose Your Date & Time",          description: "Select your preferred cleaning schedule that fits perfectly into your day.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780113671863-nqfcdsk3.jpg",          imageAlt: "Person scheduling appointment on phone"},
        {
          title: "Flexible Scheduling",          description: "Modify or reschedule appointments with ease, directly from your phone.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780113470614-y7h7p0ey.jpg?_wi=2",          imageAlt: "Clock icon"},
        {
          title: "Recurring Cleanings",          description: "Set up weekly, bi-weekly, or monthly cleanings for continuous freshness.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780113470614-y7h7p0ey.jpg?_wi=3",          imageAlt: "Repeat icon"},
        {
          title: "Text Reminders",          description: "Get convenient text reminders before your appointment, so you never miss a clean!",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ENbKhCZjFIafW4fP4MDduA9qz9/uploaded-1780113470614-y7h7p0ey.jpg?_wi=4",          imageAlt: "Message icon"},
      ]}
      title="Schedule Your Cleaning Today"
      description="Quick and easy booking — choose your date and we’ll handle the dirty work. Enjoy hassle-free scheduling for sparkling clean bins!"
      tag="Easy Booking"
      buttons={[
        {
          text: "Send Us Your Details",          href: "#booking"},
      ]}
    />
  </div>


  <div id="footer" data-section="footer">
      <FooterCard
      logoText="O.B"
      copyrightText="© 2024 Oscar's Trash Bin Cleaning. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}