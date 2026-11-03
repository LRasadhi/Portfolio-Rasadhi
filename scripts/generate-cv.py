"""Generate a simple one-page PDF resume without third-party libraries."""

from pathlib import Path

OUTPUT = Path(__file__).resolve().parents[1] / "public" / "Landunika-Rasadhi-CV.pdf"

lines = [
    "LANDUNIKA RASADHI",
    "Software Engineer | AI & Full-Stack Developer",
    "Sri Lanka  |  rasadhilandunika@gmail.com",
    "",
    "SUMMARY",
    "Software engineer with a background in Applied Sciences, Mathematics, ICT, and Physics.",
    "Focus: AI engineering, LLM applications, full-stack development, and backend systems.",
    "",
    "EXPERIENCE",
    "Software Engineer  -  Neura Intelligence (PVT) Ltd",
    "- Developing AI-powered financial content analysis applications",
    "- Building backend APIs using Python and FastAPI",
    "- Working with LLMs, prompt engineering, and evaluation pipelines",
    "- Developing frontend components using React and TypeScript",
    "- Working with data processing and integration pipelines",
    "- Using AWS services and CI/CD workflows",
    "",
    "Trainee Software Developer (AI)  -  BooleanLab (PVT) Ltd",
    "- Developed backend APIs using Python and FastAPI",
    "- Worked with SQL databases and LLM-based applications",
    "- Supported AI/ML data collection, annotation, and preprocessing",
    "- Worked with API testing and backend development",
    "",
    "PROJECTS",
    "Sri Lankan Electoral Systems Calculator  (Python, FastAPI, Angular, LangChain, Gemini)",
    "AI-Powered Financial Content Analysis Platform  (Python, FastAPI, React, LLMs, AWS)",
    "YouTube Analytics Dashboard  (Power BI, DAX)",
    "Transaction PDF Generator  (Python, FastAPI, SQLite, SQLAlchemy, Streamlit)",
    "",
    "EDUCATION",
    "B.Sc. (Hons) in Applied Sciences, Mathematics and ICT, Physics",
    "University of Sri Jayewardenepura",
    "",
    "SKILLS",
    "Python, JavaScript, TypeScript, SQL, Java, C",
    "React.js, Angular, FastAPI, REST APIs, Node.js, Express.js",
    "LLMs, RAG, NLP, Machine Learning, Pandas, Power BI",
    "MySQL, MongoDB, SQLite, Git, GitHub, AWS, Postman, GitHub Actions",
]


def escape(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def build_pdf() -> bytes:
    content_lines = ["BT", "/F1 11 Tf", "50 780 Td"]
    first = True
    for line in lines:
        size = 16 if line == "LANDUNIKA RASADHI" else 11
        leading = 18 if line == "LANDUNIKA RASADHI" else 14
        if first:
            content_lines.append(f"/{ 'F2' if line == 'LANDUNIKA RASADHI' else 'F1'} {size} Tf")
            first = False
        else:
            content_lines.append(f"0 -{leading} Td")
            if line in {
                "LANDUNIKA RASADHI",
                "SUMMARY",
                "EXPERIENCE",
                "PROJECTS",
                "EDUCATION",
                "SKILLS",
            }:
                content_lines.append(f"/F2 12 Tf")
            elif line == "Software Engineer | AI & Full-Stack Developer":
                content_lines.append("/F1 11 Tf")
            elif line.startswith("Software Engineer  -") or line.startswith("Trainee"):
                content_lines.append("/F2 11 Tf")
            elif line in {"", "SUMMARY"}:
                content_lines.append("/F1 11 Tf")
            else:
                content_lines.append("/F1 10 Tf")
        content_lines.append(f"({escape(line)}) Tj")
    content_lines.append("ET")
    stream = "\n".join(content_lines).encode("latin-1", "replace")

    objects = []

    def add(obj: bytes) -> int:
        objects.append(obj)
        return len(objects)

    add(b"<< /Type /Catalog /Pages 2 0 R >>")
    add(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    add(
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
        b"/Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>"
    )
    add(b"<< /Length %d >>\nstream\n" % len(stream) + stream + b"\nendstream")
    add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

    out = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for index, obj in enumerate(objects, start=1):
        offsets.append(len(out))
        out.extend(f"{index} 0 obj\n".encode())
        out.extend(obj)
        out.extend(b"\nendobj\n")
    xref = len(out)
    out.extend(f"xref\n0 {len(objects) + 1}\n".encode())
    out.extend(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        out.extend(f"{offset:010d} 00000 n \n".encode())
    out.extend(
        f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode()
    )
    return bytes(out)


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_bytes(build_pdf())
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
