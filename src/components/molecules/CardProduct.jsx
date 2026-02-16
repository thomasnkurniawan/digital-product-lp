import { cn } from "../../utils/cn";
import Button from "../atoms/Button";
import Card from "../atoms/Card";

export default function CardProduct({ product }) {
  return (
    <Card className="p-3 rounded-2xl">
      <div className="flex gap-3">
        {/* Cover */}
        <div className="w-[95px] sm:w-[110px] shrink-0">
          <div className="aspect-[2/3] overflow-hidden rounded-xl bg-neutral-100">
            <img
              src="https://placehold.co/400x600/000000/FFF"
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <h3 className="font-semibold text-base leading-tight">
            {product.title}
          </h3>

          <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
            {product.description}
          </p>

          <div
            className={cn(
              "mt-2 font-bold text-lg",
              product.isDiscount && "flex items-center gap-2",
            )}
          >
            {product.isDiscount && (
              <small className="text-xs text-neutral-400 line-through font-medium">
                {product.price}
              </small>
            )}
            {product.isDiscount ? product.priceAfterDiscount : product.price}
          </div>

          <div className="flex gap-2 mt-auto pt-3">
            <Button size="sm" className="flex-1">
              Beli
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              LynkId
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
