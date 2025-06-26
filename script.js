const viewpointId = '12345678-abcd-efgh-ijkl-9876543210ab';

window.addEventListener('load', async () => {
  const extension = await window.connectExtension.initialize();

  // Toon de viewpoint ID in de data-tab
  document.getElementById('viewpoint-id').textContent = viewpointId;

  try {
    await extension.viewer.loadViewpoint(viewpointId);
    console.log('Viewpoint geladen:', viewpointId);
  } catch (error) {
    console.error('Fout bij laden van viewpoint:', error);
  }
});
