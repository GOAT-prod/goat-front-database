import { Title } from "@/ui/title";

interface UnifiedPanelProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  actionButton?: React.ReactNode;
}

export const UnifiedPanel = <T,>({
  title,
  items,
  renderItem,
  actionButton,
}: UnifiedPanelProps<T>) => {
  return (
    <section className="py-4 px-6 border-r border-border w-[50%] max-h-full">
      <header className="flex items-center justify-between mb-2">
        <Title text={title} size="lg" className="font-semibold" tag="h2" />
        {actionButton && <div>{actionButton}</div>}
      </header>

      <div className="flex flex-col gap-3 px-2 pb-2 overflow-auto max-h-[calc(100%-32px)] scrollbar">
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </section>
  );
};