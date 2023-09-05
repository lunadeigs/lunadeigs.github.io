import GithubMark from "../assets/github-mark.svg";

export default function Header() {
    return (
        <div className="flex justify-end me-0 py-auto">
            <a
                className="inline-flex align-middle justify-end text-gray-600"
                href="https://github.com/lunadeigs"
                target="_blank"
            >
                <img
                    src={GithubMark}
                    alt="Github Logo"
                    className="h-1/3 py-auto"
                />
                {/* <p className="align-middle py-auto ms-2">lunadeigs</p> */}
            </a>
        </div>
    );
}
