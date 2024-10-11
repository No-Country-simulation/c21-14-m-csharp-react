import Image from 'next/image'
 
export default function Page() {
  return (
    <div className='overflow-hidden'>
      <Image className='imagen '
        src="/loginSideImg.png"
        width={400}
        height={400}
        alt="Picture"
      />
    </div>
  )
}