<template>
<div class="max-w-6xl mx-auto">
  <section class="text-gray-600 body-font">
      <div class="flex justify-center">
        <button v-on:click="toggleWork" class="inline-flex text-white bg-gray-500   focus:text-white hover:bg-gray-400 focus:bg-gray-800 hover:text-white transition duration-150 ease-in-outborder-0 py-2 px-6 focus:outline-none rounded text-lg">Work</button>
        <button  v-on:click="toggleEducation" class="ml-4 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 focus:bg-gray-800 rounded text-lg">Education</button>
      </div>
</section>
  <section  v-if="showWork" id="work" class="text-gray-600 body-font overflow-hidden">
  <transition name="slide-fade">
  <div class="container px-5 py-10 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-left md:text-center">
          <span class="font-semibold title-font text-gray-700 uppercase">Date</span>
          <span class="mt-1 text-gray-500 text-sm">2017-2018</span>
        </div>
        <div class="md:flex-grow text-left">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2"> Freelance Front-End Web Developer - YouI Design</h2>
          <p class="leading-relaxed">I started learning web development as a hobby but quickly realised how passionate I am about web development so I have been freelancing part-time at YouI Limited. I learnt how the business functioned and I was exposed to the whole process of understanding the client's requirements, taking a brief to create mock-ups for a website and then finally implementing a bespoke, mobile-optimised website which was connected to a content management system.</p>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-left md:text-center">
          <span class="font-semibold title-font text-gray-700 uppercase">Date</span>
          <span class="mt-1 text-gray-500 text-sm">2016 - Current</span>
        </div>
        <div class="md:flex-grow text-left">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Research Analyst - Altro</h2>
          <p class="leading-relaxed">I work as a research executive to help drive the overall strategy of the business and grow our expertise in European and emerging markets. 
My research skills also help drive the customer journey experience across the website so that we are always tuned into what the customer requires. 
My responsibilities also include updating and adding content to the company's website in line with the digital communication plan. I also have to create new pages on the website and upload different types of media content which means that I have to navigate my way around our content management system on a daily basis. 
I have excellent relationships with the wider business, especially with commercial stakeholders so that they are fully aware of the projects I am working on. I liaise with our web developer on upcoming projects so that new features are displayed on the website.
SEO is always front of mind to ensure that are analytics are strong. This is done in a myriad of ways such as key-word optimisation, ensuring that content on the page is relevant and always thinking about accessibility of the website.</p>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-left md:text-center">
          <span class="font-semibold title-font text-gray-700 uppercase">Date</span>
          <span class="text-sm text-gray-500">12 Jun 2019</span>
        </div>
        <div class="md:flex-grow text-left">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Research Executive - MediaCom</h2>
          <p class="leading-relaxed">I worked with a range of FMCG, Automotive and Pharmaceutical brands at an
advertising agency. My work involved using social media listening tools to understand
consumer perception for brands and cultural events such as London Fashion Week. The
insights I found helped to inform the client’s advertising campaign or tone of voice when
reaching out to different audiences.
I also have experience in creating different audience profiles based on media usage which
informed the client how to target consumers to result in brand engagement.</p>
          
        </div>
      </div>
    </div>
  </div>
  </transition>
</section>
<section v-if="showEducation" id="education" class="text-gray-600 body-font overflow-hidden">
<transition name="slide-fade">
  <div class="container px-5 py-10 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-left md:text-center">
          <span class="font-semibold title-font text-gray-700 uppercase">Date</span>
          <span class="mt-1 text-gray-500 text-sm">2018 - Current </span>
        </div>
        <div class="md:flex-grow text-left">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2"> Web Development Bootcamp – Udemy<br>
          JavaScript Fundamentals / Watch and Code</h2>
          <!-- <p class="leading-relaxed">I started learning web development as a hobby but quickly realised how passionate I am about web development so I have been freelancing part-time at YouI Limited. I learnt how the business functioned and I was exposed to the whole process of understanding the client's requirements, taking a brief to create mock-ups for a website and then finally implementing a bespoke, mobile-optimised website which was connected to a content management system.</p> -->
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-left md:text-center">
          <span class="font-semibold title-font text-gray-700 uppercase">Date</span>
          <span class="mt-1 text-gray-500 text-sm">2016</span>
        </div>
        <div class="md:flex-grow text-left">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Introduction to HTML and CSS – Codecademy and General Assembly</h2>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-left md:text-center">
          <span class="font-semibold title-font text-gray-700 uppercase">Date</span>
          <span class="text-sm text-gray-500">2015</span>
        </div>
        <div class="md:flex-grow text-left">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">IPA Foundation Certificate<br> 
          MRS Introduction to Qualitative and Quantitative Research</h2>
        </div>
      </div>
       <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-left md:text-center">
          <span class="font-semibold title-font text-gray-700 uppercase">Date</span>
          <span class="text-sm text-gray-500">Sep 2009 – Jun 2012</span>
        </div>
        <div class="md:flex-grow text-left">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Anglia Ruskin University, Cambridge.<br>
        BA (Hons) Media Studies and Sociology (2:1)</h2>
    <p>My degree taught me important issues in the media industry regarding target audiences, globalization and new media technology. I also learnt how society is influenced through various ideologies and the extent to which audiences can be directly or indirectly influenced by media and technology. </p>
        </div>
      </div>
    </div>
  </div>
</transition>
</section>
</div>

</template>

<script>
export default {
  data: function () {
    return {
      showWork: true,
      showEducation: false
    }
  },
  methods: {
        toggleWork(){
            if( this.showWork === false ) {
                this.showWork = true;
                this.showEducation = false
                console.log('open')
            }
        },
        toggleEducation(){
            if( this.showWork === true ) {
                this.showWork = false;
                this.showEducation = true
                console.log('open')
            }
        },
    }
}
</script>
