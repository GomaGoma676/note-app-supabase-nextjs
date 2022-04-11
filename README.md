This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project setup
~~~
npx create-next-app note-app --typescript
~~~
~~~
yarn add @heroicons/react @supabase/supabase-js react-query@v4.0.0-beta.2 zustand
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