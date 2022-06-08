const Card = ({ name, size, price, image, description }) => {
    return (
        <div class="flex border-b-2 border-slate-200 font-sans">
            <div class="relative w-72 flex-none">
                <img
                    src={image}
                    alt=""
                    class="absolute inset-0 h-full w-full rounded-l object-cover hover:scale-150 hover:z-50"
                    loading="lazy"
                />
            </div>
            <form class="flex-auto p-6">
                <div class="">
                    <h1 class="justify-center text-center text-lg font-semibold text-slate-900">
                        {name}
                    </h1>
                    <div class="flex justify-center text-lg font-semibold text-slate-500">
                        {price} рублей
                    </div>
                    <div class="mt-6 w-full text-center text-sm font-medium text-slate-700">
                        В наличии
                    </div>
                </div>
                <div class="mt-4 mb-6 flex items-baseline justify-center border-b border-slate-200 pb-6">
                    <div class="space-x-2 text-sm">
                        <div className="flex justify-center">
                            <div class="mt-2 w-full text-sm font-medium text-slate-700">
                                Размер:
                            </div>
                        </div>

                        <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 font-bold text-white">
                            {size}
                        </div>
                    </div>
                </div>
                <div class="mt-2 flex w-full justify-center text-sm font-medium text-slate-700">
                    {description}
                </div>
            </form>
        </div>
    );
};

export default Card;
