vim.lsp.buf_request(0, "textDocument/completion", {
  textDocument = { uri = vim.uri_from_bufnr(0) },
  position = { line = 0, character = 5 }, -- Adjust this to match your cursor position
}, function(err, result, ctx, config)
  print("Error:", vim.inspect(err))
  print("Result:", vim.inspect(result))
end)
