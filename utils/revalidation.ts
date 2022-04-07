export const revalidateList = () => {
  fetch('/api/revalidate')
}
export const revalidateSingle = (id: string) => {
  fetch(`/api/revalidate/${id}`)
}
