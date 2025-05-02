export const Card = ({ title, icon }) => (
  <div className="rounded-lg border p-4 bg-white shadow-md">
    <div className="flex items-center gap-2 text-lg font-semibold text-blue-600">
      {icon} {title}
    </div>
    <p className="text-sm text-gray-600 mt-2">Conteúdo relacionado ao item.</p>
    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Ver mais</button>
  </div>
);
