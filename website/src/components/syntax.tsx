import type {Assign} from '@/app/types';
import {ark, type HTMLArkProps} from '@ark-ui/react';
import {useTheme} from 'next-themes';
import {forwardRef, useEffect, useState} from 'react';
import {codeToHtml, type BundledLanguage} from 'shiki';
import {twMerge} from 'tailwind-merge';

interface SyntaxProps extends Assign<HTMLArkProps<'div'>, {children: string}> {
  language?: BundledLanguage;
}

export const Syntax = forwardRef<HTMLDivElement, SyntaxProps>(
  ({children, language = 'html', className, ...props}, ref) => {
    const [parsed, setParsed] = useState('');
    const {resolvedTheme} = useTheme();

    useEffect(() => {
      codeToHtml(children, {
        lang: language,
        theme: resolvedTheme === 'dark' ? 'vitesse-dark' : 'vitesse-light',
      })
        .then(setParsed)
        .catch(console.error);
    }, [children, language, resolvedTheme]);

    return (
      <ark.div
        ref={ref}
        className={twMerge(
          '[&_.shiki]:p-4',
          '[&_.shiki]:border',
          '[&_.shiki]:rounded-sm',
          className,
        )}
        dangerouslySetInnerHTML={{__html: parsed}}
        {...props}
      />
    );
  },
);

Syntax.displayName = 'Syntax';
