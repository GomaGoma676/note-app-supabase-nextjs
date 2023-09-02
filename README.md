This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project setup
~~~
npx create-next-app@12.3.3 note-app --typescript
~~~
~~~
yarn add next@12.3.3
~~~
~~~
yarn add @heroicons/react@1.0.6 @supabase/supabase-js@1.33.3 react-query@3.34.19 zustand@3.7.1
~~~
~~~
yarn add -D tailwindcss postcss autoprefixer
~~~
~~~
yarn add -D prettier prettier-plugin-tailwindcss
~~~
https://tailwindcss.com/docs/guides/nextjs

### CASCADE Delete SQL query
~~~
ALTER TABLE public.comments
ADD CONSTRAINT comments_note_id_fkey
  FOREIGN KEY (note_id)
  REFERENCES notes(id)
  ON DELETE CASCADE;
~~~
