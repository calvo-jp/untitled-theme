import {Clipboard, Dialog, Tabs} from '@ark-ui/react';
import {CheckIcon, Copy01Icon, XCloseIcon} from '@untitled-theme/icons-react';
import {twMerge} from 'tailwind-merge';
import {useIconsGalleryContext} from './IconsGalleryContext';

export function IconDetails() {
  const iconsGallery = useIconsGalleryContext();

  const tabs = [
    {
      label: 'Html',
      value: 'Html',
      content: iconsGallery.icon?.snippets.html ?? null,
    },
    {
      label: 'React',
      value: 'React',
      content: iconsGallery.icon?.snippets.react ?? null,
    },
    {
      label: 'Svelte',
      value: 'Svelte',
      content: iconsGallery.icon?.snippets.svelte ?? null,
    },
    {
      label: 'Solid',
      value: 'Solid',
      content: iconsGallery.icon?.snippets.solid ?? null,
    },
  ];

  return (
    <Dialog.Root
      open={!!iconsGallery.icon}
      onOpenChange={(details) => {
        if (!details.open) {
          iconsGallery.setIcon(null);
        }
      }}
      lazyMount
      unmountOnExit
    >
      <Dialog.Backdrop className="z-overlay ui-open:animate-fade-in ui-closed:animate-fade-out fixed inset-0 bg-neutral-900/50 backdrop-blur-sm dark:bg-neutral-900/50" />

      <Dialog.Positioner>
        <Dialog.Content className="z-modal ui-open:animate-slide-up ui-closed:animate-slide-down fixed bottom-0 right-0 w-full border-t border-neutral-300 bg-white p-4 md:p-6 lg:p-8 dark:border-neutral-800 dark:bg-neutral-900">
          <Dialog.CloseTrigger className="absolute right-3 top-3 cursor-pointer p-1">
            <XCloseIcon />
          </Dialog.CloseTrigger>

          {!!iconsGallery.icon && (
            <div className="w-full max-w-full lg:w-[40rem] lg:max-w-[40rem] [&_.shiki]:max-h-[50vh]">
              <div>
                <div
                  className="w-fit rounded border border-neutral-300 p-3 dark:border-neutral-800"
                  dangerouslySetInnerHTML={{__html: iconsGallery.icon.html}}
                />

                <div className="mt-5 flex max-h-dvh w-fit items-center gap-5 overflow-y-auto rounded bg-neutral-100 px-3 py-2 dark:bg-neutral-800/25">
                  <code className="font-mono">
                    &lt;{iconsGallery.icon.name}&nbsp;/&gt;
                  </code>
                  <Clipboard.Root
                    className="flex"
                    value={`<${iconsGallery.icon.name} />`}
                  >
                    <Clipboard.Trigger className="p-1">
                      <Clipboard.Indicator
                        copied={
                          <CheckIcon className="size-5 text-emerald-500 dark:text-emerald-400" />
                        }
                      >
                        <Copy01Icon className="size-5" />
                      </Clipboard.Indicator>
                    </Clipboard.Trigger>
                  </Clipboard.Root>
                </div>

                <Tabs.Root
                  className="mt-5"
                  defaultValue={tabs[0].value}
                  lazyMount
                >
                  <Tabs.List className="flex gap-4">
                    {tabs.map((tab) => (
                      <Tabs.Trigger
                        key={tab.value}
                        value={tab.value}
                        className="ui-selected:text-indigo-600 dark:ui-selected:text-indigo-400"
                      >
                        {tab.label}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>

                  {tabs.map((tab) => (
                    <Tabs.Content
                      key={tab.value}
                      value={tab.value}
                      className="relative mt-5 text-sm"
                    >
                      <Clipboard.Root
                        value={tab.content?.raw ?? ''}
                        className="absolute right-4 top-4 flex items-center justify-center rounded-lg p-0.5"
                      >
                        <Clipboard.Trigger className="p-0.5">
                          <Clipboard.Indicator
                            copied={
                              <CheckIcon className="size-5 text-emerald-500 dark:text-emerald-400" />
                            }
                          >
                            <Copy01Icon className="size-5" />
                          </Clipboard.Indicator>
                        </Clipboard.Trigger>
                      </Clipboard.Root>

                      <div
                        className={twMerge(
                          '[&_.shiki]:p-4',
                          '[&_.shiki]:h-full',
                          '[&_.shiki]:rounded',
                          '[&_.shiki]:overflow-auto',
                          '[&_.shiki]:border',
                          '[&_.shiki]:border-neutral-300',
                          '[&_.shiki]:dark:border-neutral-800',
                          '[&_.shiki]:font-mono',
                          '[&_.shiki]:bg-[var(--shiki-light-bg)]',
                          '[&_.shiki]:text-[var(--shiki-light)]',
                          '[&_.shiki]:dark:bg-[var(--shiki-dark-bg)]',
                          '[&_.shiki]:dark:text-[var(--shiki-dark)]',

                          '[&_.shiki_span]:bg-[var(--shiki-light-bg)]',
                          '[&_.shiki_span]:text-[var(--shiki-light)]',
                          '[&_.shiki_span]:dark:bg-[var(--shiki-dark-bg)]',
                          '[&_.shiki_span]:dark:text-[var(--shiki-dark)]',
                        )}
                        dangerouslySetInnerHTML={{
                          __html: tab.content?.html ?? '',
                        }}
                      />
                    </Tabs.Content>
                  ))}
                </Tabs.Root>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
