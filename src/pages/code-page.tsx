import HttpCard from "./http-card";
import { httpCodes } from "../http-code/http-code";

const CodePages: React.FC = () => {
    return (
        <>
        <div className="flex gap-4 justify-center">
        {httpCodes.map(({ code, title, image }) => (
            <HttpCard key={code} code={code} title={title} image={image} />
        ))}
        </div>
        </>
    );
};

export default CodePages;