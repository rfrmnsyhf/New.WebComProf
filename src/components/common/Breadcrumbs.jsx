import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Breadcrumb visual (UX + internal linking).
// items = [{ name, path? }] — item terakhir (halaman aktif) tanpa path.
const Breadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li
            key={`${item.name}-${index}`}
            className="flex items-center gap-1.5"
          >
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="text-slate-500 transition-colors duration-200 hover:text-secondary"
              >
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-primary">
                {item.name}
              </span>
            )}
            {!isLast && (
              <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
