import spin from './spin.svg';

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <img src={spin} alt="" srcset="" className="max-h-12 animate-spin" />
    </div>
  )
}
