import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm';

export default function ScheduleCard(props) {

    // This ensure that the Ai returned response can be properly rendered in the the browser with the React Markdown lib
    const strippedMarkdown = props.schedule
        .replace(/^["'\s]*```markdown\s*/g, '')        
        .replace(/\s*```["'\s]*$/g, '')        
        .replace(/\n{3,}/g, '\n\n'); 

        console.log(strippedMarkdown);
    return (
        <section className="schedule-card">
            <h2>Plant Guru Says:</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{strippedMarkdown}</ReactMarkdown>
        </section>
    )
}