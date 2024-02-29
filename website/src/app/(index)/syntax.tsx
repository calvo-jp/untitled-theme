import type {Assign} from '@/app/types';
import {ark, type HTMLArkProps} from '@ark-ui/react';
import {forwardRef, useEffect, useState} from 'react';
import {codeToHtml, type BundledLanguage} from 'shiki';
import {twMerge} from 'tailwind-merge';

interface SyntaxProps extends Assign<HTMLArkProps<'div'>, {children: string}> {
  language?: BundledLanguage | (string & {});
}

export const Syntax = forwardRef<HTMLDivElement, SyntaxProps>(
  ({children, language = 'html', className, ...props}, ref) => {
    const [parsed, setParsed] = useState('');

    useEffect(() => {
      codeToHtml(children, {
        lang: language,
        themes: {
          dark: 'vitesse-dark',
          light: 'vitesse-light',
        },
      })
        .then(setParsed)
        .catch(console.error);
    }, [children, language]);

    return (
      <ark.div
        ref={ref}
        className={twMerge(
          '[&_.shiki]:p-4',
          '[&_.shiki]:border',
          '[&_.shiki]:rounded-sm',
          '[&_.shiki]:whitespace-pre-wrap',
          className,
        )}
        dangerouslySetInnerHTML={{__html: parsed}}
        {...props}
      />
    );
  },
);

Syntax.displayName = 'Syntax';
