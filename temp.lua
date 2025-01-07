vim.lsp.buf_request(0, "textDocument/completion", {
  textDocument = { uri = vim.uri_from_bufnr(0) },
  position = { line = 0, character = 0 },
}, function(err, result, ctx, config)
  print(vim.inspect(result))
end)
