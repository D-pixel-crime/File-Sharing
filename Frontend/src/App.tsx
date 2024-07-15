import { useEffect, useRef, useState } from "react";
import "./App.css";
import { uploadFile } from "./Service/api";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("Name", file?.name!);
        data.append("File", file!);

        const res = uploadFile(data);
        console.log(res);
      }
    };

    getImage();
  }, [file]);

  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="wrapper">
            <h1>Downloadable File Sharing</h1>
            <p>Upload and share the download link</p>
            <button onClick={handleUpload}>Upload</button>
            <input
              type="file"
              style={{ display: "none" }}
              ref={inputRef}
              onChange={(e) => {
                setFile(e.target.files![0]);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
