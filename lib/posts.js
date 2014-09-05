var moment = require('moment');

module.exports = [
  {
    src: './lib/posts/20130429_mean_stack.md',
    dest: {
      directory: './bin/2013/04/29/',
      name: 'easy-web-prototyping-with-mongodb-and-nodejs',
    },
    title: 'The MEAN Stack: MongoDB, ExpressJS, AngularJS, and Node.js',
    date: moment('2013-04-29'),
    tags: ['MongoDB', 'AngularJS', 'NodeJS']
  },
  {
    src: './lib/posts/20130512_validate_any_form.md',
    dest: {
      directory: './bin/2013/05/12/',
      name: 'how-to-easily-validate-any-form-ever-using-angularjs'
    },
    title: 'How to Easily Validate Any Form Ever Using AngularJS',
    date: moment('2013-05-12'),
    tags: ['MongoDB', 'AngularJS']
  },
  {
    src: './lib/posts/20130606_mongoose_mistakes.md',
    dest: {
      directory: './bin/2013/06/06/',
      name: '61'
    },
    title: 'Mistakes You\'re Probably Making With MongooseJS, And How To Fix Them',
    date: moment('2013-06-06'),
    tags: ['MongoDB', 'NodeJS']
  },
  {
    src: './lib/posts/20130621_paleo_dev.md',
    dest: {
      directory: './bin/2013/06/21/',
      name: '8-reasons-why-better-nutrition-makes-you-a-better-developer'
    },
    title: '8 Reasons Why Better Nutrition Makes You a Better Developer',
    date: moment('2013-06-21'),
    tags: ['Paleo']
  },
  {
    src: './lib/posts/20130722_mean_part_i.md',
    dest: {
      directory: './bin/2013/07/22/',
      name: 'introduction-to-the-mean-stack-part-one-setting-up-your-tools'
    },
    title: 'Introduction to the MEAN Stack, Part One: Setting Up Your Tools',
    date: moment('2013-07-22'),
    tags: ['MongoDB', 'AngularJS', 'NodeJS'],
    image: '//developers.google.com/cloud/mean/images/mean_stack.png'
  },
  {
    src: './lib/posts/20130729_mean_part_ii.md',
    dest: {
      directory: './bin/2013/07/29/',
      name: 'introduction-to-the-mean-stack-part-two-building-and-testing-a-to-do-list'
    },
    title: 'Introduction to the MEAN Stack, Part Two: Building and Testing a To-do List',
    date: moment('2013-07-29'),
    tags: ['MongoDB', 'AngularJS', 'NodeJS'],
    image: '//developers.google.com/cloud/mean/images/mean_stack.png'
  },
  {
    src: './lib/posts/20130923_directives.md',
    dest: {
      directory: './bin/2013/09/23/',
      name: 'the-8020-guide-to-writing-angularjs-directives'
    },
    title: 'The 80/20 Guide to Writing AngularJS Directives',
    date: moment('2013-09-23'),
    tags: ['AngularJS'],
    image: '//thehospitalitycoach.net/wp-content/uploads/2011/07/80-20-Cafe-Restaurant-Rule.jpg'
  },
  {
    src: './lib/posts/20131202_currencies.md',
    dest: {
      directory: './bin/2013/12/02',
      name: 'price-internationalization-with-the-mean-stack'
    },
    title: 'Price Internationalization with the MEAN Stack',
    date: moment('2013-12-02'),
    tags: ['NodeJS', 'AngularJS'],
    code: 'https://github.com/vkarpov15/mean-exchange-rates',
    image: '//thumbs.dreamstime.com/x/small-currency-dice-forex-chart-18044052.jpg'
  },
  {
    src: './lib/posts/20140110_andrew_luck.md',
    dest: {
      directory: './bin/2014/01/10',
      name: 'want-to-ace-your-next-developer-interview-channel-andrew-luck'
    },
    title: 'Want To Ace Your Next Developer Interview? Channel Andrew Luck',
    date: moment('2014-01-10'),
    tags: ['Random'],
    image: '//thecodebarbarian.files.wordpress.com/2014/01/andrew-luck.jpg'
  },
  {
    src: './lib/posts/20140117_angular_filters.md',
    dest: {
      directory: './bin/2014/01/17',
      name: 'the-8020-guide-to-writing-and-using-angularjs-filters'
    },
    title: 'The 80/20 Guide to Writing and Using AngularJS Filters',
    date: moment('2014-01-17'),
    tags: ['AngularJS'],
    image: '//thecodebarbarian.files.wordpress.com/2014/01/hanashuriken2.png'
  },
  {
    src: './lib/posts/20140124_paleo_nyc.md',
    dest: {
      directory: './bin/2014/01/24',
      name: 'my-top-5-paleo-lifestyle-hacks-for-new-yorkers'
    },
    title: 'My Top 5 Paleo Lifestyle Hacks for New Yorkers',
    date: moment('2014-01-24'),
    tags: ['Paleo'],
    image: '//thecodebarbarian.files.wordpress.com/2014/01/img_5016.jpg'
  },
  {
    src: './lib/posts/20140131_data_binding.md',
    dest: {
      directory: './bin/2014/01/31',
      name: 'what-you-need-to-know-about-angularjs-data-binding'
    },
    title: 'What You Need To Know About AngularJS Data Binding',
    date: moment('2014-01-31'),
    tags: ['AngularJS'],
    image: '//thecodebarbarian.files.wordpress.com/2014/01/fiendishchain-tf05-jp-vg.png'
  },
  {
    src: './lib/posts/20140214_nba.md',
    dest: {
      directory: './bin/2014/02/14',
      name: 'crunching-30-years-of-nba-data-with-mongodb-aggregation'
    },
    title: 'Crunching 30 Years of NBA Data with MongoDB Aggregation',
    date: moment('2014-02-14'),
    tags: ['MongoDB'],
    image: '//lh3.googleusercontent.com/18mV0Ncz4UqJ0EUjDixCjYvwofYL1RrUi9gEqeh0TjU0GM9H6l6Ghqo6peu9idrh7-3uN5rY5CTcoDlXyg6gXnEgTkkg7kOsBoANvZZuBmH-8x1gu1U98eVhuA'
  },
  {
    src: './lib/posts/20140228_2x.md',
    dest: {
      directory: './bin/2014/02/28',
      name: 'the-optimal-setup-for-listening-to-talks-at-2x-playback-speed'
    },
    title: 'The Optimal Setup for Listening to Talks at 2x Playback Speed',
    date: moment('2014-02-28'),
    tags: ['Random'],
    image: '//lh4.googleusercontent.com/HmVWuOlZ3L0le0QELn3yrTzYLJlM1ZMrmWPc1yuOMKC7HmRtwnyXQ1x-uNdwJai_WG9qJ5049XYw_l94ngF4j9Rj_gx7iu4OUIEYO6io9JmoVIK_sAI36YeV-A'
  },
  {
    src: './lib/posts/20140314_math.md',
    dest: {
      directory: './bin/2014/03/14',
      name: 'why-math-is-necessary-for-cs-majors'
    },
    title: 'Why Math is Necessary for CS Majors',
    date: moment('2014-03-14'),
    tags: ['Random'],
    image: '//thecodebarbarian.files.wordpress.com/2014/03/pure-mathematics-formulc3a6-blackboard.jpg' 
  },
  {
    src: './lib/posts/20140328_nutrition.md',
    dest: {
      directory: './bin/2014/03/28',
      name: 'plugging-usda-nutrition-data-into-mongodb'
    },
    title: 'Plugging USDA Nutrition Data into MongoDB',
    date: moment('2014-03-28'),
    tags: ['MongoDB'],
    code: 'https://github.com/vkarpov15/usda-sr25-mongodb',
    image: '//i247.photobucket.com/albums/gg158/MDA2008/Bradford/BaconTower.jpg'
  },
  {
    src: './lib/posts/20140410_text_search.md',
    dest: {
      directory: './bin/2014/04/10',
      name: 'a-nodejs-perspective-on-whats-new-in-mongodb-2-6-part-i-text-search'
    },
    title: 'A NodeJS Perspective on What\'s New in MongoDB 2.6, Part I: Text Search',
    date: moment('2014-04-10'),
    image: '//samuellam.files.wordpress.com/2012/09/nodemongo.png',
    tags: ['MongoDB', 'NodeJS']
  },
  {
    src: './lib/posts/20140425_aggregation_out.md',
    dest: {
      directory: './bin/2014/04/25',
      name: 'a-nodejs-perspective-on-whats-new-in-mongodb-2-6-part-ii-aggregation-out'
    },
    title: 'A NodeJS Perspective on What\'s New in MongoDB 2.6, Part II: Aggregation $out',
    date: moment('2014-04-25'),
    tags: ['MongoDB', 'NodeJS'],
    image: '//samuellam.files.wordpress.com/2012/09/nodemongo.png',
    code: 'https://github.com/vkarpov15/lean-mean-nutrition/blob/master/dependencies/aggregate_weekly_calories.js#L15-79'
  },
  {
    src: './lib/posts/20140509_mongoose_389.md',
    dest: {
      directory: './bin/2014/05/09',
      name: 'whats-new-in-mongoose-3-8-9'
    },
    title: 'What\'s New in Mongoose 3.8.9',
    date: moment('2014-05-09'),
    tags: ['MongoDB', 'NodeJS'],
    image: '//houstonbeerweek.com/cal/uploads/mvsc.jpg'
  }
];