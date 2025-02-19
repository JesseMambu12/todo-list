export default function HeaderComponent() {
  return (
    <div>
      {/* Header */}
      <div className="relative w-full h-[35vh] overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAG02k9uomeIqLlL37tXK8blgKyF_8umwOw&s"
          alt="foto header"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />

        {/* Add New TODO */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <h1 className="text-white text-4xl font-bold drop-shadow-lg tracking-widest">
            TODO
          </h1>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-[60%] max-w-xl px-4 py-2 rounded-full shadow-md focus:outline-none"
          />
        </div>
      </div>

      {/* Container for Checkbox */}
      <div className="bg-white w-full py-10">
        <div className="flex flex-col items-center gap-4">
          {/* List Todo */}
          <div className="w-[60%] max-w-xl px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <input type="checkbox" id="todo1" />
            <label htmlFor="todo1" className="text-gray-800">
              Jog around the park
            </label>
          </div>

          <div className="w-[60%] max-w-xl px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <input type="checkbox" id="todo2" />
            <label htmlFor="todo2" className="text-gray-800">
              10 minutes meditation
            </label>
          </div>

          <div className="w-[60%] max-w-xl px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <input type="checkbox" id="todo3" />
            <label htmlFor="todo3" className="text-gray-800">
              Read for 1 hour
            </label>
          </div>

          <div className="w-[60%] max-w-xl px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <input type="checkbox" id="todo4" />
            <label htmlFor="todo4" className="text-gray-800">
              Pick up groceries
            </label>
          </div>

          <div className="w-[60%] max-w-xl px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <input type="checkbox" id="todo5" />
            <label htmlFor="todo5" className="text-gray-800">
              Complete TODO App on Fronted Mentor
            </label>
          </div>
          <div className="w-[60%] max-w-xl px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <input type="checkbox" id="todo5" />
            <label htmlFor="todo5" className="text-gray-800">
              Complete TODO App on Fronted Mentor
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

// catatan
/* <ceinter> untuk menaruh ditre tengah
className= min-h-screen utuk full screen layar laptop
className xl,lg,md adalah media query unuk lebih responsice
absolut harus ada relative biar bisa ngikut parent*/
