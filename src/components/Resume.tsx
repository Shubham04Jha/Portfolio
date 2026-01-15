import { FaDownload } from "react-icons/fa6";
import { pdfjs, Document, Page } from 'react-pdf';
import { useState, useEffect } from "react";
import pdf from "../assets/shubham_latest_public_resume.pdf";
import { Button } from "./ui/Button";
import { Reachout } from "./Reachout";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { cn } from "../utils/cn";
import DATA from "../config";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const Resume = () => {
    const [numPages, setNumPages] = useState<number>(1);
    const [width, setWidth] = useState<number>(window.innerWidth);

    // First Principle: Responsive scaling for fixed-ratio documents
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div className="pb-12 flex flex-col items-center gap-4 max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center">
                <a href={pdf} download={`${DATA.name}_Resume.pdf`}>
                    <Button variant="accent" size="xl" className="shadow-accent/20">
                        <div className="flex gap-3 items-center">
                            <FaDownload className="animate-bounce" />
                            Download CV
                        </div>
                    </Button>
                </a>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-accent/20 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-background-950/40 backdrop-blur-md p-4 rounded-xl border border-primary/20 shadow-2xl overflow-hidden">
                    <p className="text-text-400 text-sm italic my-4 mx-auto w-fit">
                        Previewing {numPages} page(s)
                    </p>
                    <Document 
                        file={pdf} 
                        className="flex flex-col items-center gap-4"
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from({length:numPages}, (_, index) => (
                            <div key={`page_container_${index + 1}`} className="flex flex-col items-center gap-4">
                                <Page 
                                    pageNumber={index + 1} 
                                    width={width > 768 ? 700 : width - 50} 
                                    className={cn(
                                        "rounded-sm overflow-hidden transition-all duration-500",
                                        "brightness-[0.90] contrast-[1.05] sepia-[0.15]", 
                                        "shadow-[0_20px_50px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.3)]",
                                        "border border-accent/90"
                                    )}
                                />
                                <div className="px-4 py-1 bg-primary/10 border border-primary/20 rounded-full">
                                    <p className="text-xs font-medium text-primary tracking-widest uppercase">
                                        Page {index + 1} <span className="opacity-50 mx-1">/</span> {numPages}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Document>
                </div>
            </div>

            <div className="w-full pt-12 border-t border-primary/10">
                <Reachout />
            </div>
        </div>
    );
};