import spin from '../static/spin.svg';

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <img src={spin} alt="Loading icon" className="max-h-12 animate-spin" />
    </div>
  )
}
