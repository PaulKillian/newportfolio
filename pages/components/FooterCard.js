import Image from "next/image"

export const about =
  [
    {
      title: 'The Beach',
      descript: 'When I am not working, I am at the beach with my family digging deep holes for my children to play in.',
      img: '/beach3.webp',
      name: 'beach3'
    },
    {
      title: 'Exploration',
      descript: 'I liken web development to space exploration in its endless potential and vastness of possibilities.',
      img: '/spc.webp',
      name: 'spc'
    }, 
    {
      title: 'Body Boarding',
      descript: "I have ridden waves my whole life. There's little that compares to the thrill of flying down a wave.",
      img: '/wave.webp',
      name: 'wave'
    }
  ]

export default function FooterCard({title, descript, img, name}) {
  return (
    <div class="max-w-sm rounded-lg foot-border m-8">
      <Image 
        class="rounded-t-lg" 
        src={img}
        alt={name} 
        width={450}
        height={50}
      />
      <div class="p-2 glass">
        <h5 class="mb-2 text-2xl tracking-tight font-bold tracking-tight text-white">{title}</h5>
        <p class="mb-3 text-stone-50 font-normal text-left text-gray-900">{descript}</p>
      </div>
    </div>
  )
}


