
import slide from "./slide"

const BlogHome = () => {
    const data = [
        {
            id:1,
            TitleOne:"YOU CAN CHANGE THE WORLD",
            TitleTwo:"STRONG STYLE",
            paraOne:"HOME WOMEN ARE REDIRECTING HOLLYWOOD",
            paraTwo:"NEW WAYS TO WEAR DENIM DELT BAGS MEAKE A COMEBACK",
            name:"BY JASMIN SMITH",
            subTitle:"YHOW TO SHOP MINDFULLY",
            qrCode:"/images.qr code",
            cover:"/3a343f6afb25b06dbfefde553255b06f.webp",

        }
    ]
  return (
    <>
      <section className="Home">
        <div className="left-content">{
            data.map((value)=> {
                return (
                    <div className='content'>
                    <div className='logo'>
                        <h1>M</h1>
                    </div>
                    <div className='home-img'>
                        <img src={value.cover}/>
                    </div>
                    <div className="text">
                        <h1>{value.TitleOne}</h1>
                        <p>{value.paraOne}</p>
                        <span>{value.name}</span>
                    </div>
                    <div className="text text2">
                        <h1>{value.TitleTwo}</h1>
                        <p>{value.paraTwo}</p>
                        <span>{value.subTitle}</span>
                    </div>
                    <div className="qrCode">
                        <img src={value.qrCode}/>
                    </div>
                    </div>
                )
            })
        } </div>
        <div className="right-content"> 
        <slide/>
        </div>
      </section>

    </>
  )
}

export default BlogHome