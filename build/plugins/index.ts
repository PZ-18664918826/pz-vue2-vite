import WindiCSS from 'vite-plugin-windicss';
import type { ConfigEnv, PluginOption } from 'vite';
import vue from './vue';
import ScriptSetup from './setup';
import html from './html';
import iconify from './iconify';

export function setupVitePlugins(configEnv: ConfigEnv): (PluginOption | PluginOption[])[] {
  const plugins = [vue, html(configEnv), ...iconify, WindiCSS(), ScriptSetup];

  return plugins;
}
