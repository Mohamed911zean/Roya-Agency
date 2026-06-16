import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Ahmed Hassan",
    role: "CEO, E-commerce Brand",
    text: "Working with Roya Agency transformed our online presence completely.",
    image: "/avatars/client-1.jpg",
  },
  {
    name: "Mohamed Ali",
    role: "Startup Founder",
    text: "Our conversion rates increased significantly within the first few months.",
    image: "/avatars/client-2.jpg",
  },
  {
    name: "Omar Khaled",
    role: "Marketing Director",
    text: "Professional execution, clear communication, and outstanding results.",
    image: "/avatars/client-3.jpg",
  },
  {
    name: "Sara Mostafa",
    role: "Real Estate Manager",
    text: "The team understands both design and business goals exceptionally well.",
    image: "/avatars/client-4.jpg",
  },
  {
    name: "Youssef Adel",
    role: "Business Owner",
    text: "One of the best investments we made for our digital growth.",
    image: "/avatars/client-5.jpg",
  },
  {
    name: "Mariam Ashraf",
    role: "Brand Manager",
    text: "Their attention to detail and conversion-focused mindset is impressive.",
    image: "/avatars/client-6.jpg",
  },
  {
    name: "Kareem El-Din",
    role: "SaaS Founder",
    text: "They built a scalable growth engine that brought us qualified B2B leads consistently.",
    image: "/avatars/client-7.jpg",
  },
  {
    name: "Nour El-Hoda",
    role: "Medical Center Director",
    text: "Roya managed our medical brand beautifully; client trust and bookings doubled.",
    image: "/avatars/client-8.jpg",
  },
  {
    name: "Tarek Mahmoud",
    role: "F&B Chain Owner",
    text: "Their content creation strategy made our restaurants go viral in weeks.",
    image: "/avatars/client-9.jpg",
  },
  {
    name: "Laila Wael",
    role: "Cosmetics Brand Founder",
    text: "From zero sales to a leading market position—Roya is a true strategic partner.",
    image: "/avatars/client-10.jpg",
  },
  {
    name: "Hany Abdel-Aziz",
    role: "Logistics Tech Director",
    text: "Highly data-driven team. They don't just sell promises, they deliver transparent ROAS.",
    image: "/avatars/client-11.jpg",
  },
  {
    name: "Farida Ahmed",
    role: "EdTech Platform Manager",
    text: "The creative direction and campaign positioning exceeded all our internal KPIs.",
    image: "/avatars/client-12.jpg",
  },
]


export const firstRow = reviews.slice(0, reviews.length / 2)
export const secondRow = reviews.slice(reviews.length / 2)

export function ReviewCard({
  name,
  role,
  text,
  image,
}: {
  name: string
  role: string
  text: string
  image: string
}) {
  return (
    <figure
      className="
        relative
        w-[320px]
        md:w-[380px]
        rounded-3xl
        border
        border-border
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <blockquote className="text-text-secondary leading-relaxed mb-6">
        "{text}"
      </blockquote>

      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <figcaption className="font-semibold text-roya-primary">
            {name}
          </figcaption>

          <p className="text-sm text-text-secondary">
            {role}
          </p>
        </div>
      </div>
    </figure>
  )
}

export  default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee  pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse  pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
