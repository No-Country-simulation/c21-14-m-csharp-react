import Image from 'next/image'
 
export default function Page() {
  return (
    <div className='h-full'>
      <Image
        src="/loginSideImg.png"
        width={500}
        height={1000}
        overflow= "hidden"
        alt="Picture"
      />
    </div>
  )
}