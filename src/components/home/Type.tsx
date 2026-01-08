import Typewriter from 'typewriter-effect';


export const Type = ()=>{
    return(
        <Typewriter
        onInit={(typewriter) => {
            typewriter
            .typeString("Software Developer")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Competitive Programmer")
            .pauseFor(2000)
            .deleteAll()
            .typeString("MERN Stack Developer")
            .pauseFor(2000)
            .deleteAll()
            .start()
        }}
        options={{
            loop:true
        }}
        />
    )
}