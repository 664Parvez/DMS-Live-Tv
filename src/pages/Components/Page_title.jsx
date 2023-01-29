import Link from "next/link"

const page_title = (props) => {
    return (
        <>
            <div id="page_title">
                <h1 className="text-center">{props.title}</h1>
                <p className="mb-0"><Link href="/">Home</Link> / {props.brad}</p>
            </div>
        </>
    )
}

export default page_title