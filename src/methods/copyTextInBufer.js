export const copyTextInBufer = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    console.log('Async: Copying to clipboard was successful!', text)
  } catch (err) {
    console.error('Async: Could not copy text: ', err)
  }
}