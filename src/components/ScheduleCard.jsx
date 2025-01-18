import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm';

export default function ScheduleCard(props) {

    const strippedMarkdown = props.schedule
        .replace(/^["'\s]*```markdown\s*/g, '')
        // Remove the closing code fence and any trailing quotes
        .replace(/\s*```["'\s]*$/g, '')
        // Optional: Ensure proper line spacing
        .replace(/\n{3,}/g, '\n\n'); // Replace multiple newlines with double newlines

        console.log(strippedMarkdown);
    return (
        <section className="schedule-card">
            <h2>Plant Guru Says:</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{strippedMarkdown}</ReactMarkdown>
        </section>
    )
}