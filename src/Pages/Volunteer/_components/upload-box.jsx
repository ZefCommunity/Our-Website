import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Controller } from 'react-hook-form';

export default function UploadBox({ control, disabled = false }) {
  const [file, setFile] = useState();

  return (
    <Controller
      name="resum"
      control={control}
      render={({ field, fieldState }) => {
        function applyFile(nextFile) {
          if (!nextFile) {
            return;
          }
          setFile(nextFile);
          field.onChange(nextFile);
        }

        function handleChange(event) {
          applyFile(event.target.files?.[0]);
        }

        function handleDrop(event) {
          event.preventDefault();
          if (disabled) {
            return;
          }
          applyFile(event.dataTransfer.files?.[0]);
        }

        return (
          <div className="w-full text-center">
            <input
              id="volunteer-resume"
              accept=".docx,.pdf,.doc,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              type="file"
              className="hidden"
              disabled={disabled}
              onChange={handleChange}
            />
            <label
              htmlFor="volunteer-resume"
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleDrop}
              className={`flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-[2.5px] border-dashed px-6 py-9 transition-colors duration-150 ease-out ${
                fieldState.error
                  ? 'border-red-400 bg-red-50/40'
                  : 'border-[#d9dde3] hover:border-green-500 hover:bg-green-50'
              } ${disabled ? 'pointer-events-none opacity-70' : ''}`}
            >
              <div className="w-fit rounded-2xl bg-green-50 p-4 text-green-500">
                <Upload size={24} aria-hidden />
              </div>
              <p className="mt-3 text-xl font-semibold text-slate-800 sm:text-2xl">
                Drag &amp; drop your resume
              </p>
              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                or click to browse PDF, DOC, or DOCX up to 10MB
              </p>
              {file ? (
                <div className="mt-4 rounded-lg bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-slate-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              ) : null}
            </label>
          </div>
        );
      }}
    />
  );
}
