import Content from './Content'

export default function Section({theme}){
    return (
        <div>
            <h1>This a section</h1>
            <Content theme={theme}/>
        </div>
    )
}