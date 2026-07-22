import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { Controller } from "react-hook-form";
export default function UploadBox({ control }) {
  // useState
  const [file, setFile] = useState();

  return (
    <Controller
      name="resum"
      control={control}
      render={({ field, fieldState }) => {
        function handleChange(e) {
          const fil = e.target.files?.[0];
          if (fil) {
            setFile(fil);
            field.onChange(fil);
          }
        }

        function handleDrop(e) {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0];
          if (!file) return;
          setFile(file);
        }
        return (
          <div className="w-full text-center">
            <Input
              id="xlsx"
              accept=".docx,.pdf,.doc"
              type="file"
              className="hidden"
              onChange={handleChange}
            />
            <label
              htmlFor="xlsx"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="border-[2.5px] flex justify-center items-center flex-col border-[#d9dde3] hover:border-green-500 hover:bg-green-50 transition-colors duration-100 ease-in-out rounded-2xl border-dashed px-6 py-9  w-full"
            >
              <div className="p-4 rounded-2xl text-green-500 w-fit bg-green-50">
                <Upload size={24} />
              </div>
              <h1 className="text-2xl font-semibold">
                {" "}
                Drag & drop your resume file
              </h1>
              <p className="text-gray-400 text-base">
                or click to browse .docx, .doc and .pdf up to 10MB
              </p>
              {file && (
                <div className="mt-3 text-center">
                  <div>
                    <span>{file.name}</span>
                  </div>
                  <div>
                    <span>{(file.size / (1024 * 1024)).toFixed(2)}MB</span>
                  </div>
                </div>
              )}
            </label>
          </div>
        );
      }}
    />
  );
}
