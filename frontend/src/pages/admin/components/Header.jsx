import { useAuth } from './AuthContext'

export const Header = () => {
  const { logout, isAuthenticated } = useAuth()

  return (
    <header className="bg-slate-200  w-full shadow-xl shadow-slate-300 rounded-br-[50px] flex items-center justify-between px-20 py-3 mb-5">
      <div className="flex items-center gap-2">
        <img src="/img/bricklylogo.png" alt="" className="w-14" />
        <img src="/img/brickly.png" alt="" className="w-32" />
      </div>
      {isAuthenticated && (
        <button
          onClick={() => {
            logout()
          }}
          className="flex gap-1 font-bold text-mainBlack border-2 border-mainBlack pr-2 py-1 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-bar-to-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 12l10 0" />
            <path d="M10 12l4 4" />
            <path d="M10 12l4 -4" />
            <path d="M4 4l0 16" />
          </svg>
          <p>Cerrar Sesión</p>
        </button>
      )}
    </header>
  )
}
