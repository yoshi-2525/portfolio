import { useRef } from "react";

type ZoomableImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  /** Classes for the trigger button that wraps the image (e.g. positioning). */
  wrapperClassName?: string;
};

// クリックで画像を拡大表示する。<dialog> の showModal を使うので、
// Esc で閉じる・フォーカスの閉じ込め・背面のスクロール抑止はブラウザに任せる。
export default function ZoomableImage({ wrapperClassName = "", alt = "", ...imgProps }: ZoomableImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={alt ? `${alt}を拡大表示` : "画像を拡大表示"}
        className={`block w-full cursor-default ${wrapperClassName}`}
      >
        <img alt={alt} {...imgProps} />
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
        // 画像の外側（背景）をクリックしたら閉じる
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-4 sm:p-8 backdrop:bg-ink-222/80 open:flex items-center justify-center"
      >
        <img
          src={imgProps.src}
          alt={alt}
          onClick={close}
          className="max-h-full max-w-full rounded-[16px] border-2 border-border-dark bg-surface-white object-contain"
        />
        <button
          type="button"
          onClick={close}
          aria-label="閉じる"
          className="fixed top-4 right-4 w-12 h-12 rounded-full border-2 border-border-gray bg-surface-white shadow-md font-maru font-bold text-2xl text-ink-222 flex items-center justify-center hover:shadow-lg transition-shadow"
        >
          ×
        </button>
      </dialog>
    </>
  );
}
