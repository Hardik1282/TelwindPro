tailwind.config = {
    content: ['./src/**/*.{html,js}'],
    theme: {
     
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        pop: ['Poppins', 'sans-serif'],
      },
      extend: {
        
     
      }  
    },
    plugins: [
        // include Flowbite as a plugin in your Tailwind CSS project
        require('flowbite/plugin')
    ]
  }